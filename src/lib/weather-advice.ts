import type { Locale } from '../i18n/config';
import { beaufort, uvLevelIndex, weatherKey } from './weather-codes';

/**
 * 天气智能建议引擎（纯函数，服务端与浏览器端共用）
 *
 * 设计原则：
 * 1. 不输出气象术语，全部翻译成游客能直接执行的动作；
 * 2. 只展示「当前条件命中」的条目，不命中就隐藏，避免堆砌；
 * 3. 气象预警优先级最高（置顶红色），风险提醒次之；
 * 4. 结合本景区地理环境（海拔约 2,465 米的高原峡谷）给出针对性提示。
 */

export interface AdviceInput {
  code: number;
  temp: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  uv: number;
  isDay: boolean;
  tMax: number;
  tMin: number;
  precipProb: number;
  precipSum: number;
  uvMax: number;
}

export interface AdviceItem {
  id: string;
  icon: string;
  text: string;
}

export interface WeatherAdvice {
  /** 出行建议核心文案（1–2 行） */
  headline: string[];
  /** 气象预警（置顶，红色） */
  alerts: AdviceItem[];
  /** 无预警时的安抚文案 */
  calm: string;
  groups: {
    outfit: AdviceItem[];
    activity: AdviceItem[];
    items: AdviceItem[];
  };
  /** 风险提醒 */
  risks: AdviceItem[];
  titles: {
    alerts: string;
    outfit: string;
    activity: string;
    items: string;
    risks: string;
  };
}

export interface AdviceLabels {
  alertsTitle: string;
  gOutfit: string;
  gActivity: string;
  gItems: string;
  gRisks: string;
  calmNoAlert: string;
  copy: Record<string, string>;
}

export const ADVICE_LABELS: Record<Locale, AdviceLabels> = {
  es: {
    alertsTitle: 'Alertas meteorológicas',
    gOutfit: 'Qué vestir',
    gActivity: 'Qué hacer',
    gItems: 'Qué llevar',
    gRisks: 'A tener en cuenta',
    calmNoAlert: 'Sin alertas meteorológicas por el momento',
    copy: {
      headlineAlert:
        'Hoy se espera un sistema meteorológico más intenso: priorizá la seguridad y mantené el plan flexible.',
      headlineWet: 'Puede llover hoy; dejá margen en las actividades al aire libre.',
      headlineSunny: 'En general hay buenas condiciones para visitar: cuidá el sol y tomá agua.',
      headlineMild: 'Condiciones agradables para la visita. ¡Que disfrutes el sendero!',
      bringUmbrella: 'Conviene llevar paraguas o piloto',
      noUmbrella: 'No hace falta paraguas',

      alertThunderstorm:
        'Tormenta eléctrica: evitá cumbres, filos y árboles aislados, y suspendé las caminatas.',
      alertHeavyRain:
        'Lluvia intensa: alejate de la quebrada, los cauces y las zonas bajas — puede haber crecidas repentinas.',
      alertGale:
        'Viento fuerte: mantenete lejos de bordes de barranco, miradores y cartelería; atención a lo que pueda caer.',
      alertExtremeUv: 'UV extremo: evitá la exposición prolongada y usá protección alta.',
      alertSnow: 'Nieve: los senderos pueden estar congelados — cuidado al pisar y abrigate.',
      alertFog: 'Niebla: visibilidad reducida, manejá con precaución; los panoramas serán limitados.',
      alertHeat: 'Calor intenso: reducí la actividad al mediodía y cuidate de la deshidratación.',

      outfitLight: 'Temperaturas altas: ropa liviana y transpirable.',
      outfitWarm: 'Temperaturas bajas: abrigate bien.',
      outfitLayers: 'Gran amplitud térmica: vestite por capas, fáciles de sacar o poner.',
      outfitWindproof: 'Bastante viento: campera rompeviento; evitá polleras sueltas y gorros que se vuelan.',
      outfitWaterproof: 'Se esperan precipitaciones: campera impermeable y calzado que no se moje.',
      outfitMild: 'Temperaturas agradables: ropa informal de todos los días.',

      actThunder: 'No se recomienda caminar al aire libre; los atractivos culturales del pueblo son más seguros.',
      actHeavyRain: 'Evitá las actividades al aire libre; priorizá museos, iglesias y sitios bajo techo.',
      actWetTrail: 'La experiencia al aire libre será limitada; los senderos de la quebrada se ponen resbaladizos.',
      actAvoidNoon: 'Acortá la actividad al mediodía y descansá a la sombra.',
      actGoodOutdoor: 'Cielo despejado: ideal para caminar la quebrada y recorrer al aire libre.',
      actSunrise: 'Buena visibilidad: ideal para amaneceres, atardeceres y la luz de la quebrada.',
      actSoftLight: 'Luz suave: excelente para fotos y caminatas largas.',
      actNoView: 'Visibilidad baja: no es buen momento para miradores ni fotos de paisaje.',
      actClosed: 'Es probable que suspendan actividades al aire libre y teleféricos: confirmá antes de salir.',
      actAltitude: 'A ~2.465 m: los recién llegados deben caminar despacio, tomar agua y evitar esfuerzos.',

      itemSunKit: 'Protector solar, anteojos de sol y gorro',
      itemWater: 'Agua suficiente',
      itemJacket: 'Una campera',
      itemWarmCoat: 'Abrigo grueso y bufanda',
      itemUmbrella: 'Paraguas plegable',
      itemRaincoat: 'Piloto impermeable (mejor que paraguas con viento)',
      itemShoes: 'Calzado de trekking con buen agarre',

      riskSlippery: 'Senderos y rocas resbaladizos: cuidá el paso y no te acerques a los bordes.',
      riskFlashFlood:
        'En época de lluvias hay riesgo de crecidas y desprendimientos: seguí el pronóstico.',
      riskNoonUv: 'El UV es máximo al mediodía: descansá bajo techo o a la sombra.',
      riskWindChill: 'La sensación térmica es bastante más fría que la temperatura: abrigate.',
      riskIcy: 'El suelo puede estar congelado: extrema las precauciones.',
    },
  },
  en: {
    alertsTitle: 'Weather alerts',
    gOutfit: 'What to wear',
    gActivity: 'What to do',
    gItems: 'What to bring',
    gRisks: 'Risk notes',
    calmNoAlert: 'No weather alerts at the moment',
    copy: {
      headlineAlert:
        'A stronger weather system is expected today — put safety first and keep your plans flexible.',
      headlineWet: 'Rain is possible today; keep your outdoor plans flexible.',
      headlineSunny: 'Overall good conditions for visiting — mind the sun and drink water.',
      headlineMild: 'Pleasant conditions for your visit. Enjoy the trail!',
      bringUmbrella: 'Bring rain gear',
      noUmbrella: 'No rain gear needed',

      alertThunderstorm:
        'Thunderstorms: avoid summits, ridges and isolated trees, and pause outdoor hikes.',
      alertHeavyRain:
        'Heavy rain: stay away from the gorge, riverbeds and low ground — flash floods are possible.',
      alertGale:
        'Strong winds: keep away from cliff edges, viewpoints and signage; watch for falling debris.',
      alertExtremeUv: 'Extreme UV: avoid prolonged sun exposure and use strong protection.',
      alertSnow: 'Snow: trails may be icy — take care with your footing and dress warmly.',
      alertFog: 'Fog: low visibility, drive carefully; views will be limited.',
      alertHeat: 'Intense heat: limit midday activity and guard against dehydration.',

      outfitLight: 'Warm temperatures: light, breathable clothing.',
      outfitWarm: 'Cold temperatures: dress warmly.',
      outfitLayers: 'Big day–night temperature swing: wear layers you can add or remove.',
      outfitWindproof: 'Fairly windy: a windproof jacket; skip loose skirts and hats that blow away.',
      outfitWaterproof: 'Precipitation expected: a waterproof jacket and shoes that stay dry.',
      outfitMild: 'Mild temperatures: everyday casual clothing is fine.',

      actThunder: 'Outdoor hiking is not advised; the village’s cultural sights are the safer choice.',
      actHeavyRain: 'Avoid outdoor activities; prioritise museums, churches and indoor sights.',
      actWetTrail: 'Outdoor experiences will be limited; gorge trails become slippery.',
      actAvoidNoon: 'Shorten outdoor activity around midday and rest in the shade.',
      actGoodOutdoor: 'Clear skies: great for hiking the gorge and exploring outdoors.',
      actSunrise: 'Good visibility: ideal for sunrise, sunset and the gorge’s light.',
      actSoftLight: 'Soft light: excellent for photos and long, easy walks.',
      actNoView: 'Poor visibility: not a good time for viewpoints or landscape photos.',
      actClosed: 'Open-air activities and cable cars are likely suspended — check before you set out.',
      actAltitude:
        'At ~2,465 m: newcomers should walk slowly, drink water and avoid strenuous effort.',

      itemSunKit: 'Sunscreen, sunglasses and a hat',
      itemWater: 'Plenty of water',
      itemJacket: 'A jacket',
      itemWarmCoat: 'A warm coat and a scarf',
      itemUmbrella: 'A folding umbrella',
      itemRaincoat: 'A rain jacket (better than an umbrella in wind)',
      itemShoes: 'Grippy hiking shoes',

      riskSlippery: 'Trails and rocks get slippery — watch your footing and keep clear of cliff edges.',
      riskFlashFlood:
        'In the rainy season the gorge carries flash-flood and rockfall risk — keep an eye on the forecast.',
      riskNoonUv: 'UV peaks around midday: rest indoors or in the shade.',
      riskWindChill: 'It feels noticeably colder than the reading — dress warmly.',
      riskIcy: 'The ground may be icy — take extra care.',
    },
  },
  zh: {
    alertsTitle: '气象预警',
    gOutfit: '出行穿搭',
    gActivity: '游玩安排',
    gItems: '随身物品',
    gRisks: '风险提醒',
    calmNoAlert: '当前无气象预警',
    copy: {
      headlineAlert: '今天有较强天气过程，建议以安全为先，灵活调整行程。',
      headlineWet: '今天有降水可能，户外安排建议留出弹性。',
      headlineSunny: '天气总体适合游览，注意防晒与补水。',
      headlineMild: '天气总体适宜游览，祝旅途愉快。',
      bringUmbrella: '建议携带雨具',
      noUmbrella: '无需携带雨具',

      alertThunderstorm: '雷暴天气：请勿在崖顶、山脊或孤树下避雨，暂停户外徒步。',
      alertHeavyRain: '降雨较强：避开峡谷、河谷与低洼地带，谨防山洪。',
      alertGale: '大风天气：远离崖边、观景台边缘与广告牌，注意高空坠物。',
      alertExtremeUv: '紫外线极强：避免长时间暴晒，务必做好硬防晒。',
      alertSnow: '有降雪：步道可能结冰，注意防滑与保暖。',
      alertFog: '有雾：能见度低，山路请谨慎驾驶，观景效果受限。',
      alertHeat: '高温天气：减少正午户外活动，谨防中暑与脱水。',

      outfitLight: '气温偏高：建议轻薄透气的衣物。',
      outfitWarm: '气温偏低：注意防寒保暖。',
      outfitLayers: '昼夜温差大：建议多层穿搭，方便随时增减。',
      outfitWindproof: '风力偏大：建议防风外套，避免宽松长裙与容易被吹落的帽子。',
      outfitWaterproof: '有降水：建议防水外套与不惧湿的鞋。',
      outfitMild: '气温适宜：日常休闲穿搭即可。',

      actThunder: '不建议户外徒步，改为村落内的人文景点更稳妥。',
      actHeavyRain: '不建议户外游玩，优先安排博物馆、教堂等室内景点。',
      actWetTrail: '露天体验一般，峡谷步道会变湿滑，行走请放慢脚步。',
      actAvoidNoon: '缩短正午时段的户外活动，安排在阴凉处休息。',
      actGoodOutdoor: '天气晴好：适合峡谷徒步与户外游览。',
      actSunrise: '能见度好：适合观赏日出日落与峡谷光影。',
      actSoftLight: '光线柔和：适合拍照与长时间户外逛游。',
      actNoView: '能见度差：不适合观景与拍摄远景。',
      actClosed: '露天项目与索道大概率停运，出发前请先确认。',
      actAltitude: '海拔约 2,465 米：初到者请缓步慢行、多喝水，避免剧烈运动。',

      itemSunKit: '防晒霜、墨镜与遮阳帽',
      itemWater: '充足饮用水',
      itemJacket: '一件外套',
      itemWarmCoat: '厚外套与围巾',
      itemUmbrella: '折叠伞',
      itemRaincoat: '雨衣（风大时比长柄伞更稳妥）',
      itemShoes: '防滑徒步鞋',

      riskSlippery: '步道与岩石湿滑：注意脚下，不要靠近崖边。',
      riskFlashFlood: '雨季峡谷有山洪与落石风险，请留意天气变化。',
      riskNoonUv: '正午紫外线最强：建议安排在室内或阴凉处休息。',
      riskWindChill: '体感明显比气温更冷：注意保暖。',
      riskIcy: '地面可能结冰：行走请格外小心。',
    },
  },
  it: {
    alertsTitle: 'Avvisi meteo',
    gOutfit: 'Come vestirsi',
    gActivity: 'Cosa fare',
    gItems: 'Cosa portare',
    gRisks: 'Da tenere presente',
    calmNoAlert: 'Nessun avviso meteo al momento',
    copy: {
      headlineAlert:
        'Oggi è previsto un sistema meteo più intenso: prima la sicurezza, mantieni il programma flessibile.',
      headlineWet: 'Oggi può piovere; lascia margine alle attività all’aperto.',
      headlineSunny: 'Condizioni nel complesso buone per la visita: attenzione al sole e bevi acqua.',
      headlineMild: 'Condizioni piacevoli per la visita. Buon sentiero!',
      bringUmbrella: 'Meglio portare l’impermeabile',
      noUmbrella: 'Non serve l’ombrello',

      alertThunderstorm:
        'Temporale: evita cime, creste e alberi isolati e sospendi le escursioni.',
      alertHeavyRain:
        'Pioggia intensa: allontanati dalla gola, dagli alvei e dalle zone basse — possibili piene improvvise.',
      alertGale:
        'Vento forte: stai lontano da bordi di burrone, belvedere e cartelli; attenzione a ciò che può cadere.',
      alertExtremeUv: 'UV estremo: evita l’esposizione prolungata e usa protezione alta.',
      alertSnow: 'Neve: i sentieri possono ghiacciare — attenzione ai piedi e copriti bene.',
      alertFog: 'Nebbia: visibilità ridotta, guida con prudenza; panorami limitati.',
      alertHeat: 'Caldo intenso: riduci l’attività a mezzogiorno e attenzione alla disidratazione.',

      outfitLight: 'Temperature alte: abbigliamento leggero e traspirante.',
      outfitWarm: 'Temperature basse: copriti bene.',
      outfitLayers: 'Forte escursione termica: vestiti a strati, facili da togliere o aggiungere.',
      outfitWindproof: 'Vento sostenuto: giacca antivento; evita gonne larghe e cappelli che volano via.',
      outfitWaterproof: 'Precipitazioni previste: giacca impermeabile e scarpe che non si bagnano.',
      outfitMild: 'Temperature miti: abbigliamento casual va benissimo.',

      actThunder: 'Sconsigliato camminare all’aperto; i siti culturali del paese sono più sicuri.',
      actHeavyRain: 'Evita le attività all’aperto; privilegia musei, chiese e luoghi al coperto.',
      actWetTrail: 'Esperienza all’aperto limitata; i sentieri della gola diventano scivolosi.',
      actAvoidNoon: 'Riduci l’attività a mezzogiorno e riposa all’ombra.',
      actGoodOutdoor: 'Cielo sereno: ideale per camminare nella gola e stare all’aperto.',
      actSunrise: 'Buona visibilità: ideale per alba, tramonto e la luce della gola.',
      actSoftLight: 'Luce morbida: ottima per le foto e per lunghe passeggiate.',
      actNoView: 'Visibilità scarsa: non è il momento per belvedere o foto di paesaggio.',
      actClosed: 'Attività all’aperto e funivie probabilmente sospese: verifica prima di partire.',
      actAltitude: 'A ~2.465 m: chi arriva da poco deve camminare piano, bere e evitare sforzi.',

      itemSunKit: 'Crema solare, occhiali da sole e cappello',
      itemWater: 'Acqua a sufficienza',
      itemJacket: 'Una giacca',
      itemWarmCoat: 'Cappotto pesante e sciarpa',
      itemUmbrella: 'Ombrello pieghevole',
      itemRaincoat: 'Giacca antipioggia (meglio dell’ombrello col vento)',
      itemShoes: 'Scarpe da trekking con buon grip',

      riskSlippery: 'Sentieri e rocce scivolosi: attenzione ai piedi e ai bordi.',
      riskFlashFlood:
        'In stagione delle piogge c’è rischio di piene e caduta massi: segui le previsioni.',
      riskNoonUv: 'L’UV è massimo a mezzogiorno: riposa al coperto o all’ombra.',
      riskWindChill: 'La percezione è molto più fredda della temperatura: copriti.',
      riskIcy: 'Il terreno può essere ghiacciato: massima attenzione.',
    },
  },
};

export function buildWeatherAdvice(input: AdviceInput, locale: Locale): WeatherAdvice {
  const L = ADVICE_LABELS[locale];
  const c = L.copy;
  const key = weatherKey(input.code);

  const swing = Math.max(0, input.tMax - input.tMin);
  const level = beaufort(input.wind);
  const uvMax = Math.max(input.uv, input.uvMax);
  const uvIdx = uvLevelIndex(uvMax);

  const isThunder = key === 'thunderstorm';
  const isDrizzle = key === 'drizzle';
  const isRain = key === 'rain' || key === 'showers';
  const isSnow = key === 'snow' || key === 'snowShowers';
  const isFog = key === 'fog';
  const isClear = key === 'clear' || key === 'mainlyClear';
  const isCloudy = key === 'partlyCloudy' || key === 'overcast' || key === 'cloudy';

  const heavyRain = input.code === 65 || input.code === 67 || input.code === 82;
  const heavySnow = input.code === 75 || input.code === 77 || input.code === 86;

  const anyWet = isThunder || isDrizzle || isRain || isSnow;
  const rainLikely = input.precipProb >= 60 || input.precipSum >= 2;

  const windy = level >= 5;
  const gale = level >= 7;
  const hot = input.tMax >= 32;
  const cold = input.tMax <= 10;
  const bigSwing = swing >= 8;

  const alerts: AdviceItem[] = [];
  const risks: AdviceItem[] = [];
  const outfit: AdviceItem[] = [];
  const activity: AdviceItem[] = [];
  const items: AdviceItem[] = [];

  const add = (bucket: AdviceItem[], id: string, icon: string): void => {
    const text = c[id];
    if (text) bucket.push({ id, icon, text });
  };

  // ── 1) 气象预警（优先级最高，置顶展示）────────────────────────
  if (isThunder) add(alerts, 'alertThunderstorm', '⛈️');
  if (heavyRain) add(alerts, 'alertHeavyRain', '🌧️');
  if (gale) add(alerts, 'alertGale', '💨');
  if (uvIdx === 4) add(alerts, 'alertExtremeUv', '🕶️');
  if (heavySnow) add(alerts, 'alertSnow', '❄️');
  if (isFog) add(alerts, 'alertFog', '🌫️');
  if (input.tMax >= 35) add(alerts, 'alertHeat', '🥵');

  // ── 2) 出行穿搭 ────────────────────────────────────────────
  if (hot) add(outfit, 'outfitLight', '👕');
  if (cold) add(outfit, 'outfitWarm', '🧥');
  if (bigSwing) add(outfit, 'outfitLayers', '🧅');
  if (windy) add(outfit, 'outfitWindproof', '🌬️');
  if (anyWet) add(outfit, 'outfitWaterproof', '☔');
  if (!outfit.length) add(outfit, 'outfitMild', '👕');

  // ── 3) 游玩安排（景区专属提示优先保留）──────────────────────
  add(activity, 'actAltitude', '⛰️');
  if (isThunder) add(activity, 'actThunder', '🚫');
  else if (heavyRain) add(activity, 'actHeavyRain', '🏛️');
  else if (anyWet || rainLikely) add(activity, 'actWetTrail', '🌧️');
  if (hot) add(activity, 'actAvoidNoon', '🕛');
  if (isClear && !anyWet) {
    add(activity, 'actGoodOutdoor', '🥾');
    add(activity, 'actSunrise', '🌄');
  }
  if (isCloudy) add(activity, 'actSoftLight', '📷');
  if (isFog) add(activity, 'actNoView', '🌫️');
  if (gale) add(activity, 'actClosed', '🚡');
  activity.splice(4);

  // ── 4) 随身物品 ────────────────────────────────────────────
  if (uvIdx >= 1) add(items, 'itemSunKit', '🧴');
  if (hot || uvIdx >= 2) add(items, 'itemWater', '💧');
  if (bigSwing) add(items, 'itemJacket', '🧥');
  if (cold) add(items, 'itemWarmCoat', '🧣');
  if (anyWet || rainLikely) add(items, windy || gale ? 'itemRaincoat' : 'itemUmbrella', windy || gale ? '🧥' : '☂️');
  if (anyWet || uvIdx >= 2) add(items, 'itemShoes', '🥾');
  items.splice(4);

  // ── 5) 风险提醒 ────────────────────────────────────────────
  if (anyWet && !isThunder) add(risks, 'riskSlippery', '⚠️');
  if (rainLikely && !heavyRain) add(risks, 'riskFlashFlood', '🌊');
  if (uvIdx >= 3) add(risks, 'riskNoonUv', '☀️');
  if (input.feelsLike <= input.temp - 6) add(risks, 'riskWindChill', '🥶');
  if (isSnow) add(risks, 'riskIcy', '❄️');
  risks.splice(3);

  // ── 6) 出行建议核心文案 ─────────────────────────────────────
  const headline = [
    alerts.length
      ? c.headlineAlert
      : rainLikely
        ? c.headlineWet
        : uvIdx >= 2
          ? c.headlineSunny
          : c.headlineMild,
    anyWet || rainLikely ? c.bringUmbrella : c.noUmbrella,
  ];

  return {
    headline,
    alerts,
    calm: L.calmNoAlert,
    groups: { outfit, activity, items },
    risks,
    titles: {
      alerts: L.alertsTitle,
      outfit: L.gOutfit,
      activity: L.gActivity,
      items: L.gItems,
      risks: L.gRisks,
    },
  };
}

function esc(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * 生成建议面板 HTML。
 * 服务端与客户端共用同一份实现，避免两端渲染结果不一致。
 */
export function renderAdviceHtml(a: WeatherAdvice): string {
  const list = (items: AdviceItem[]): string =>
    `<ul class="advice-list">` +
    items
      .map(
        (i) =>
          `<li class="advice-item"><span class="advice-icon" aria-hidden="true">${i.icon}</span><span>${esc(
            i.text
          )}</span></li>`
      )
      .join('') +
    `</ul>`;

  const group = (title: string, icon: string, items: AdviceItem[]): string =>
    items.length
      ? `<section class="advice-group"><h4 class="advice-group-title"><span class="advice-icon" aria-hidden="true">${icon}</span>${esc(
          title
        )}</h4>${list(items)}</section>`
      : '';

  const alertsHtml = a.alerts.length
    ? `<div class="advice-alerts">` +
      `<p class="advice-alerts-title"><span aria-hidden="true">⚠️</span>${esc(a.titles.alerts)}</p>` +
      a.alerts.map((i) => `<p class="advice-alert">${esc(i.text)}</p>`).join('') +
      `</div>`
    : `<p class="advice-calm"><span aria-hidden="true">✅</span>${esc(a.calm)}</p>`;

  const risksHtml = a.risks.length
    ? `<div class="advice-risks"><h4 class="advice-group-title"><span class="advice-icon" aria-hidden="true">⚠️</span>${esc(
        a.titles.risks
      )}</h4>${list(a.risks)}</div>`
    : '';

  return (
    `<div class="advice-panel">` +
    `<div class="advice-headline">` +
    a.headline
      .map((line, i) => `<p class="advice-headline-line${i === 0 ? ' is-main' : ''}">${esc(line)}</p>`)
      .join('') +
    `</div>` +
    alertsHtml +
    `<div class="advice-groups">` +
    group(a.titles.outfit, '👕', a.groups.outfit) +
    group(a.titles.activity, '🎒', a.groups.activity) +
    group(a.titles.items, '🧳', a.groups.items) +
    `</div>` +
    risksHtml +
    `</div>`
  );
}
