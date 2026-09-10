import fs from 'node:fs';
import path from 'node:path';
import { ENTITY } from './entity';

/**
 * 服务端天气数据获取（构建期 / 服务器端执行，带缓存）
 * - 数据在服务器端获取，不依赖任何密钥
 * - 内存缓存 + 本地文件缓存（默认 30 分钟），避免重复请求
 * - 任何异常都会优雅降级（返回 null 或上一次缓存），不影响页面构建
 *
 * 注意：本文件含 Node 内置模块引用，只能在服务端使用。
 * 天气代码 / 文案 / 建议引擎等需要浏览器端复用的纯逻辑，
 * 分别放在 weather-codes.ts、weather-labels.ts、weather-advice.ts 中。
 */

export interface DailyForecast {
  date: string; // YYYY-MM-DD
  code: number;
  tMax: number;
  tMin: number;
  precipSum: number;
  precipProb: number;
  uvMax: number;
  sunrise: string;
  sunset: string;
}

export interface WeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  precipitation: number;
  code: number;
  uv: number;
  isDay: boolean;
  daily: DailyForecast[];
  fetchedAt: string;
}

const CACHE_TTL_MS = 30 * 60 * 1000;
const CACHE_FILE = path.join(process.cwd(), 'node_modules', '.cache', 'gdd-weather.json');

const API_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${ENTITY.latitude}&longitude=${ENTITY.longitude}` +
  '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,is_day,uv_index' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,uv_index_max,sunrise,sunset' +
  '&timezone=America%2FArgentina%2FJujuy&forecast_days=7';

interface CacheEntry {
  at: number;
  data: WeatherData;
}

let memory: CacheEntry | null = null;

function readFileCache(): CacheEntry | null {
  try {
    const raw = fs.readFileSync(CACHE_FILE, 'utf8');
    const parsed = JSON.parse(raw) as CacheEntry;
    if (parsed && parsed.data && typeof parsed.at === 'number') return parsed;
  } catch {
    /* ignore */
  }
  return null;
}

function writeFileCache(entry: CacheEntry): void {
  try {
    fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
    fs.writeFileSync(CACHE_FILE, JSON.stringify(entry));
  } catch {
    /* ignore */
  }
}

function num(value: unknown, fallback = 0): number {
  const n = typeof value === 'string' ? Number(value) : (value as number);
  return Number.isFinite(n) ? n : fallback;
}

function normalize(raw: any): WeatherData | null {
  const current = raw?.current;
  const daily = raw?.daily;
  if (!current || !daily || !Array.isArray(daily.time)) return null;

  const days: DailyForecast[] = daily.time.slice(0, 7).map((date: string, i: number) => ({
    date,
    code: num(daily.weather_code?.[i]),
    tMax: Math.round(num(daily.temperature_2m_max?.[i])),
    tMin: Math.round(num(daily.temperature_2m_min?.[i])),
    precipSum: num(daily.precipitation_sum?.[i]),
    precipProb: Math.round(num(daily.precipitation_probability_max?.[i])),
    uvMax: Math.round(num(daily.uv_index_max?.[i])),
    sunrise: daily.sunrise?.[i] || '',
    sunset: daily.sunset?.[i] || '',
  }));

  return {
    temp: Math.round(num(current.temperature_2m)),
    feelsLike: Math.round(num(current.apparent_temperature, num(current.temperature_2m))),
    humidity: Math.round(num(current.relative_humidity_2m)),
    wind: Math.round(num(current.wind_speed_10m)),
    precipitation: num(current.precipitation),
    code: num(current.weather_code),
    uv: Math.round(num(current.uv_index)),
    isDay: num(current.is_day, 1) === 1,
    daily: days,
    fetchedAt: new Date().toISOString(),
  };
}

export async function getWeather(): Promise<WeatherData | null> {
  const now = Date.now();

  if (memory && now - memory.at < CACHE_TTL_MS) return memory.data;

  const fileCache = readFileCache();
  if (fileCache && now - fileCache.at < CACHE_TTL_MS) {
    memory = fileCache;
    return fileCache.data;
  }

  try {
    const res = await fetch(API_URL, {
      headers: { 'User-Agent': `${ENTITY.domain} weather` },
      signal: AbortSignal.timeout(9000),
    });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const data = normalize(await res.json());
    if (!data) throw new Error('normalize failed');
    memory = { at: now, data };
    writeFileCache(memory);
    return data;
  } catch {
    if (fileCache) {
      memory = fileCache;
      return fileCache.data;
    }
    return null;
  }
}

/* 以下为服务端 / 浏览器端共用的纯逻辑，统一从独立模块转出，保持引用路径向后兼容 */
export { weatherKey, weatherIcon, uvLevelIndex, UV_COLORS, beaufort } from './weather-codes';
export { WEATHER_LABELS } from './weather-labels';
export type { WeatherLabels } from './weather-labels';
