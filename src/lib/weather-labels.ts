import type { Locale } from '../i18n/config';

/**
 * 天气模块的界面文案（纯数据，服务端与浏览器端共用）
 */
export interface WeatherLabels {
  sectionTitle: string;
  sectionIntro: string;
  now: string;
  feelsLike: string;
  humidity: string;
  wind: string;
  precipitation: string;
  uvIndex: string;
  chanceOfRain: string;
  sunrise: string;
  sunset: string;
  forecastTitle: string;
  today: string;
  updated: string;
  disclaimer: string;
  unavailable: string;
  uvLevels: string[];
  conditions: Record<string, string>;
}

export const WEATHER_LABELS: Record<Locale, WeatherLabels> = {
  es: {
    sectionTitle: 'Clima en Tilcara y pronóstico',
    sectionIntro:
      'El clima de la Quebrada de Humahuaca es seco y de gran amplitud térmica: días soleados y noches frías. Consultá el estado actual, las recomendaciones para el día y los próximos días antes de planificar la caminata.',
    now: 'Ahora',
    feelsLike: 'Sensación',
    humidity: 'Humedad',
    wind: 'Viento',
    precipitation: 'Precipitación',
    uvIndex: 'Índice UV',
    chanceOfRain: 'Prob. de lluvia',
    sunrise: 'Amanecer',
    sunset: 'Atardecer',
    forecastTitle: 'Próximos 7 días',
    today: 'Hoy',
    updated: 'Actualizado',
    disclaimer: 'Datos meteorológicos orientativos, sujetos a cambios. Verificá antes de salir.',
    unavailable: 'Información meteorológica no disponible en este momento.',
    uvLevels: ['Bajo', 'Moderado', 'Alto', 'Muy alto', 'Extremo'],
    conditions: {
      clear: 'Despejado',
      mainlyClear: 'Mayormente despejado',
      partlyCloudy: 'Parcialmente nublado',
      overcast: 'Nublado',
      cloudy: 'Nublado',
      fog: 'Niebla',
      drizzle: 'Llovizna',
      rain: 'Lluvia',
      showers: 'Chaparrones',
      snow: 'Nieve',
      snowShowers: 'Nevadas dispersas',
      thunderstorm: 'Tormenta eléctrica',
    },
  },
  en: {
    sectionTitle: 'Tilcara Weather & Forecast',
    sectionIntro:
      'The Quebrada de Humahuaca has a dry climate with a wide daily temperature range: sunny days and cold nights. Check current conditions, today’s practical advice and the week ahead before planning your hike.',
    now: 'Now',
    feelsLike: 'Feels like',
    humidity: 'Humidity',
    wind: 'Wind',
    precipitation: 'Precipitation',
    uvIndex: 'UV index',
    chanceOfRain: 'Chance of rain',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    forecastTitle: 'Next 7 days',
    today: 'Today',
    updated: 'Updated',
    disclaimer: 'Indicative weather data, subject to change. Please verify before you set out.',
    unavailable: 'Weather information is currently unavailable.',
    uvLevels: ['Low', 'Moderate', 'High', 'Very high', 'Extreme'],
    conditions: {
      clear: 'Clear',
      mainlyClear: 'Mainly clear',
      partlyCloudy: 'Partly cloudy',
      overcast: 'Overcast',
      cloudy: 'Cloudy',
      fog: 'Fog',
      drizzle: 'Drizzle',
      rain: 'Rain',
      showers: 'Showers',
      snow: 'Snow',
      snowShowers: 'Snow showers',
      thunderstorm: 'Thunderstorm',
    },
  },
  zh: {
    sectionTitle: '蒂尔卡拉天气与未来预报',
    sectionIntro:
      '乌马瓦卡峡谷属干燥气候，昼夜温差极大：白天阳光充足，夜晚明显偏冷。规划徒步前，建议先了解当前实况、当日出行建议与未来几天趋势。',
    now: '实况',
    feelsLike: '体感',
    humidity: '湿度',
    wind: '风速',
    precipitation: '降水量',
    uvIndex: '紫外线指数',
    chanceOfRain: '降水概率',
    sunrise: '日出',
    sunset: '日落',
    forecastTitle: '未来 7 天',
    today: '今天',
    updated: '更新时间',
    disclaimer: '天气数据仅供参考，可能发生变化，出行前请再次确认。',
    unavailable: '暂时无法获取天气信息。',
    uvLevels: ['低', '中等', '高', '很高', '极高'],
    conditions: {
      clear: '晴朗',
      mainlyClear: '大部晴朗',
      partlyCloudy: '局部多云',
      overcast: '阴天',
      cloudy: '多云',
      fog: '雾',
      drizzle: '毛毛雨',
      rain: '降雨',
      showers: '阵雨',
      snow: '降雪',
      snowShowers: '阵雪',
      thunderstorm: '雷暴',
    },
  },
  it: {
    sectionTitle: 'Meteo a Tilcara e previsioni',
    sectionIntro:
      'La Quebrada de Humahuaca ha un clima secco con forti escursioni termiche: giornate soleggiate e notti fredde. Controlla le condizioni attuali, i consigli pratici per la giornata e i prossimi giorni prima di pianificare l’escursione.',
    now: 'Adesso',
    feelsLike: 'Percepita',
    humidity: 'Umidità',
    wind: 'Vento',
    precipitation: 'Precipitazioni',
    uvIndex: 'Indice UV',
    chanceOfRain: 'Prob. di pioggia',
    sunrise: 'Alba',
    sunset: 'Tramonto',
    forecastTitle: 'Prossimi 7 giorni',
    today: 'Oggi',
    updated: 'Aggiornato',
    disclaimer: 'Dati meteo indicativi e soggetti a variazioni. Verifica prima di partire.',
    unavailable: 'Informazioni meteo al momento non disponibili.',
    uvLevels: ['Basso', 'Moderato', 'Alto', 'Molto alto', 'Estremo'],
    conditions: {
      clear: 'Sereno',
      mainlyClear: 'Prevalentemente sereno',
      partlyCloudy: 'Parzialmente nuvoloso',
      overcast: 'Coperto',
      cloudy: 'Nuvoloso',
      fog: 'Nebbia',
      drizzle: 'Pioviggine',
      rain: 'Pioggia',
      showers: 'Rovesci',
      snow: 'Neve',
      snowShowers: 'Rovesci di neve',
      thunderstorm: 'Temporale',
    },
  },
};
