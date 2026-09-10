/**
 * 天气代码 / 图标 / 风级（纯函数模块）
 * 不依赖 Node 内置模块，服务端与浏览器端均可复用。
 */

export const WEATHER_CODE_KEYS: [number, number, string][] = [
  [0, 0, 'clear'],
  [1, 1, 'mainlyClear'],
  [2, 2, 'partlyCloudy'],
  [3, 3, 'overcast'],
  [45, 48, 'fog'],
  [51, 57, 'drizzle'],
  [61, 67, 'rain'],
  [71, 77, 'snow'],
  [80, 82, 'showers'],
  [85, 86, 'snowShowers'],
  [95, 99, 'thunderstorm'],
];

/** WMO 天气代码 → 语义键 */
export function weatherKey(code: number): string {
  for (const [a, b, k] of WEATHER_CODE_KEYS) {
    if (code >= a && code <= b) return k;
  }
  return 'cloudy';
}

export const WEATHER_ICONS: Record<string, string> = {
  clear: '☀️',
  mainlyClear: '🌤️',
  partlyCloudy: '⛅',
  overcast: '☁️',
  cloudy: '☁️',
  fog: '🌫️',
  drizzle: '🌦️',
  rain: '🌧️',
  showers: '🌦️',
  snow: '❄️',
  snowShowers: '🌨️',
  thunderstorm: '⛈️',
};

export function weatherIcon(code: number, isDay = true): string {
  const key = weatherKey(code);
  if (!isDay && (key === 'clear' || key === 'mainlyClear')) return '🌙';
  return WEATHER_ICONS[key] || '⛅';
}

/** 紫外线指数 → 等级下标（0 低 … 4 极高） */
export function uvLevelIndex(uv: number): number {
  if (uv >= 11) return 4;
  if (uv >= 8) return 3;
  if (uv >= 6) return 2;
  if (uv >= 3) return 1;
  return 0;
}

export const UV_COLORS = ['#2e9e4f', '#e0a800', '#e8720c', '#d93636', '#7b3fb5'];

/**
 * 风速（km/h）→ 蒲福风级（0–12）
 * 用于把「35 km/h」翻译成游客能理解的「风力偏大」。
 */
export function beaufort(kmh: number): number {
  const steps = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];
  let level = 0;
  for (let i = 0; i < steps.length; i += 1) {
    if (kmh >= steps[i]) level = i + 1;
  }
  return Math.min(level, 12);
}
