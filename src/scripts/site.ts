// Garganta del Diablo — 客户端交互（原生 JS，无框架）

import { UV_COLORS, uvLevelIndex, weatherIcon, weatherKey } from '../lib/weather-codes';
import { WEATHER_LABELS } from '../lib/weather-labels';
import { buildWeatherAdvice, renderAdviceHtml } from '../lib/weather-advice';

type AppLocale = 'es' | 'en' | 'zh' | 'it';
const LOCALES: AppLocale[] = ['es', 'en', 'zh', 'it'];

// PWA：注册 Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      /* ignore */
    });
  });
}

// 主题切换
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch {
    /* ignore */
  }
});

// 语言切换：替换路径首段 locale，保留 hash
document.querySelectorAll<HTMLButtonElement>('.lang-btn[data-locale]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const l = btn.dataset.locale as string;
    const segs = window.location.pathname.split('/').filter(Boolean);
    if (segs.length && (LOCALES as string[]).includes(segs[0])) {
      segs[0] = l;
    } else {
      segs.unshift(l);
    }
    window.location.href = '/' + segs.join('/') + window.location.hash;
  });
});

// 导航滚动态
const nav = document.getElementById('site-nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 滚动揭示
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => obs.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }
}

// FAQ 折叠
document.querySelectorAll<HTMLButtonElement>('.faq-question[data-faq]').forEach((q) => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    if (!item) return;
    const expanded = item.classList.toggle('expanded');
    q.querySelector('.faq-icon')?.classList.toggle('rotated', expanded);
  });
});

// 画廊：分类筛选 + 灯箱
const galleryItems = Array.from(document.querySelectorAll<HTMLElement>('.gallery-item'));
const galleryFilters = Array.from(document.querySelectorAll<HTMLButtonElement>('.gallery-filter'));
const catLabels: Record<string, string> = {};
galleryFilters.forEach((b) => {
  const key = b.dataset.filter || '';
  if (key) catLabels[key] = b.textContent?.trim() || '';
});
if (galleryFilters.length) {
  galleryFilters.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter || 'all';
      galleryFilters.forEach((b) => b.classList.toggle('active', b === btn));
      galleryItems.forEach((item) => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hidden', !show);
      });
    });
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
const lightboxCaption = document.getElementById('lightbox-caption');
let lightboxIndex: number | null = null;

function visibleItems(): HTMLElement[] {
  return galleryItems.filter((el) => !el.classList.contains('hidden'));
}

function showLightbox(el: HTMLElement) {
  const img = el.querySelector('img');
  if (!img || !lightbox || !lightboxImg) return;
  lightboxImg.src = img.getAttribute('src') || '';
  lightboxImg.alt = img.alt;
  if (lightboxCaption) lightboxCaption.textContent = catLabels[el.dataset.category || ''] || '';
  lightbox.style.display = 'flex';
}

function openLightbox(item: HTMLElement) {
  const list = visibleItems();
  const idx = list.indexOf(item);
  if (idx === -1) return;
  lightboxIndex = idx;
  showLightbox(list[idx]);
}

function closeLightbox() {
  if (lightbox) lightbox.style.display = 'none';
  lightboxIndex = null;
}

function navLightbox(dir: number) {
  const list = visibleItems();
  if (!list.length) return;
  const base = lightboxIndex === null ? 0 : lightboxIndex;
  lightboxIndex = (base + dir + list.length) % list.length;
  showLightbox(list[lightboxIndex]);
}

galleryItems.forEach((item) => {
  item.addEventListener('click', () => openLightbox(item));
});
document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev')?.addEventListener('click', (e) => {
  e.stopPropagation();
  navLightbox(-1);
});
document.getElementById('lightbox-next')?.addEventListener('click', (e) => {
  e.stopPropagation();
  navLightbox(1);
});
lightbox?.addEventListener('click', closeLightbox);
window.addEventListener('keydown', (e) => {
  if (lightboxIndex === null) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowRight') navLightbox(1);
  else if (e.key === 'ArrowLeft') navLightbox(-1);
});

// 互动遗址地图
const sitemapMarkers = Array.from(document.querySelectorAll<HTMLButtonElement>('.sitemap-marker'));
const detailIndex = document.getElementById('sitemap-detail-index');
const detailName = document.getElementById('sitemap-detail-name');
const detailDesc = document.getElementById('sitemap-detail-desc');
if (sitemapMarkers.length && detailName && detailDesc) {
  const showZone = (m: HTMLButtonElement) => {
    const n = (sitemapMarkers.indexOf(m) + 1).toString().padStart(2, '0');
    if (detailIndex) detailIndex.textContent = n;
    detailName.textContent = m.dataset.name || '';
    detailDesc.textContent = m.dataset.desc || '';
    sitemapMarkers.forEach((x) => x.classList.toggle('active', x === m));
  };
  sitemapMarkers.forEach((m) => {
    m.addEventListener('mouseenter', () => showZone(m));
    m.addEventListener('focus', () => showZone(m));
    m.addEventListener('click', (e) => {
      e.stopPropagation();
      showZone(m);
    });
  });
  showZone(sitemapMarkers[0]);
}

// 天气模块：首屏由服务端渲染，这里做一次静默刷新以保持“实时”（20 分钟内不重复请求）
const weatherBlock = document.getElementById('weather');
if (weatherBlock) {
  const REFRESH_KEY = 'gdd-weather-refresh';
  const REFRESH_TTL = 20 * 60 * 1000;
  let lastRefresh = 0;
  try {
    lastRefresh = Number(sessionStorage.getItem(REFRESH_KEY) || 0);
  } catch {
    /* ignore */
  }

  if (Date.now() - lastRefresh > REFRESH_TTL) {
    const ds = weatherBlock.dataset;
    const locale = (ds.locale || 'es') as AppLocale;
    const labels = WEATHER_LABELS[locale];
    const intl = ds.intl || 'es-AR';
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${ds.lat}&longitude=${ds.lon}` +
      '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,is_day,uv_index' +
      '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,uv_index_max,sunrise,sunset' +
      '&timezone=America%2FArgentina%2FJujuy&forecast_days=7';

    const dayName = (iso: string): string => {
      const [y, m, d] = iso.split('-').map(Number);
      return new Date(y, (m || 1) - 1, d || 1).toLocaleDateString(intl, { weekday: 'short' });
    };
    const round = (v: unknown): number => {
      const n = Number(v);
      return Number.isFinite(n) ? Math.round(n) : 0;
    };

    fetch(url)
      .then((r) => r.json())
      .then((data: any) => {
        const cur = data?.current;
        const daily = data?.daily;
        if (!cur || !daily || !Array.isArray(daily.time)) return;

        const days = daily.time.slice(0, 7).map((t: string, i: number) => ({
          date: t,
          code: round(daily.weather_code?.[i]),
          tMax: round(daily.temperature_2m_max?.[i]),
          tMin: round(daily.temperature_2m_min?.[i]),
          prob: round(daily.precipitation_probability_max?.[i]),
          sum: Number(daily.precipitation_sum?.[i]) || 0,
          uvMax: round(daily.uv_index_max?.[i]),
          sunrise: String(daily.sunrise?.[i] || ''),
          sunset: String(daily.sunset?.[i] || ''),
        }));
        const temp = round(cur.temperature_2m);
        const feels = round(cur.apparent_temperature);
        const humidity = round(cur.relative_humidity_2m);
        const wind = round(cur.wind_speed_10m);
        const uv = round(cur.uv_index);
        const code = round(cur.weather_code);
        const isDay = Number(cur.is_day) === 1;
        const today =
          days[0] ??
          { date: '', code, tMax: temp, tMin: temp, prob: 0, sum: 0, uvMax: uv, sunrise: '', sunset: '' };
        const idx = uvLevelIndex(uv);
        const conditions = labels.conditions;
        const uvLevels = labels.uvLevels;

        const advice = buildWeatherAdvice(
          {
            code,
            temp,
            feelsLike: feels,
            humidity,
            wind,
            uv,
            isDay,
            tMax: today.tMax,
            tMin: today.tMin,
            precipProb: today.prob,
            precipSum: today.sum,
            uvMax: today.uvMax,
          },
          locale
        );

        const metric = (label: string, value: string, color?: string): string =>
          `<div class="weather-metric"><span class="weather-metric-label">${label}</span>` +
          `<span class="weather-metric-value"${color ? ` style="color:${color}"` : ''}>${value}</span></div>`;

        const html =
          `<div class="weather-current">` +
          `<div class="weather-now">` +
          `<div class="weather-icon-lg">${weatherIcon(code, isDay)}</div>` +
          `<div class="weather-now-text">` +
          `<div class="weather-temp">${temp}<span>°C</span></div>` +
          `<div class="weather-cond">${conditions[weatherKey(code)] || ''}</div>` +
          `<div class="weather-now-sub">${labels.feelsLike} ${feels}°C</div>` +
          `</div></div>` +
          `<div class="weather-metrics">` +
          metric(labels.humidity, `${humidity}%`) +
          metric(labels.wind, `${wind} km/h`) +
          metric(labels.chanceOfRain, `${today.prob}%`) +
          metric(labels.uvIndex, `${uv} · ${uvLevels[idx] || ''}`, UV_COLORS[idx]) +
          metric(labels.sunrise, today.sunrise ? today.sunrise.slice(11, 16) : '—') +
          metric(labels.sunset, today.sunset ? today.sunset.slice(11, 16) : '—') +
          `</div>` +
          `</div>` +
          renderAdviceHtml(advice) +
          `<div class="weather-forecast">` +
          `<div class="weather-forecast-title">${labels.forecastTitle}</div>` +
          `<div class="weather-days">` +
          days
            .map(
              (d: any, i: number) =>
                `<div class="weather-day">` +
                `<div class="weather-day-name">${i === 0 ? labels.today : dayName(d.date)}</div>` +
                `<div class="weather-day-icon">${weatherIcon(d.code, true)}</div>` +
                `<div class="weather-day-rain">${d.prob}%</div>` +
                `<div class="weather-day-temps"><span class="tmax">${d.tMax}°</span><span class="tmin">${d.tMin}°</span></div>` +
                `</div>`
            )
            .join('') +
          `</div></div>`;

        const live = weatherBlock.querySelector('.weather-live');
        if (live) live.innerHTML = html;
        const updated = weatherBlock.querySelector('.weather-updated');
        if (updated) {
          updated.textContent = `${labels.updated || ''}: ${new Date().toLocaleString(intl, {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
          })}`;
        }
        try {
          sessionStorage.setItem(REFRESH_KEY, String(Date.now()));
        } catch {
          /* ignore */
        }
      })
      .catch(() => {
        /* 静默失败：保留服务端渲染的数据 */
      });
  }
}
