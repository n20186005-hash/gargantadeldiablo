export interface Seo {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  siteName: string;
  keywords: string[];
}

/**
 * Meta Title / Description（面向 CTR 优化）
 *
 * 策略依据（GSC 数据）：
 * 1. 大词 `garganta del diablo` 展现高但 CTR 低，主因是与伊瓜苏瀑布同名歧义 →
 *    标题首屏即锁定 «(Tilcara, Jujuy)»，用地域词过滤伊瓜苏流量。
 * 2. 带 `tilcara` / `jujuy` 的精准词 CTR 达 9.5%~11.1% → 地域词前置。
 * 3. 高意图未覆盖词：`camino a la garganta del diablo`（怎么去）、`trekking`、
 *    门票与最佳季节 → 写入 Title/Description 提升相关性。
 * 4. Description 控制在 ~150 字符内，避免 SERP 截断并把价值前置。
 */
export function getSeo(locale: string): Seo {
  const map: Record<string, Seo> = {
    es: {
      title: 'Garganta del Diablo (Tilcara, Jujuy) - Guía Completa y Trekking',
      description:
        'Guía de la Garganta del Diablo en Tilcara, Jujuy: cómo llegar a pie o en auto, entrada y precios, mejor época para el trekking y mapa de ubicación.',
      ogTitle: 'Garganta del Diablo — Guía de Trekking en Tilcara, Jujuy',
      ogDescription:
        'Todo para visitar la Garganta del Diablo de Tilcara (Jujuy): camino a pie o en auto, entrada, horarios, mejor época y mapa. No es la Garganta del Diablo de Iguazú.',
      siteName: 'Guía de Garganta del Diablo',
      keywords: [
        'Garganta del Diablo Tilcara',
        'Camino a la Garganta del Diablo',
        'Trekking Jujuy',
        'Garganta del Diablo Jujuy',
        'cómo llegar Garganta del Diablo',
        'Garganta del Diablo entrada precio',
        'Tilcara',
        'Quebrada de Humahuaca',
        'Pucará de Tilcara',
        'Garganta del Diablo Iguazú diferencia',
        '魔鬼之喉',
        '胡胡伊旅游',
      ],
    },
    en: {
      title: 'Garganta del Diablo (Tilcara, Jujuy) - Trekking & Visitor Guide',
      description:
        'Guide to Garganta del Diablo in Tilcara, Jujuy: how to get there on foot or by car, entrance fees, the best season for the hike and a location map.',
      ogTitle: "Garganta del Diablo — Hiking Guide for Tilcara, Jujuy",
      ogDescription:
        'Everything for visiting Tilcara’s Garganta del Diablo in Jujuy: the walk or drive from town, tickets, opening hours, best season and map. Not the Iguazu Falls viewpoint.',
      siteName: 'Garganta del Diablo Travel Guide',
      keywords: [
        'Garganta del Diablo Tilcara',
        'trail to Garganta del Diablo',
        'Trekking Jujuy',
        'Garganta del Diablo Jujuy',
        'how to get to Garganta del Diablo',
        'Garganta del Diablo entrance fee',
        'Tilcara',
        'Quebrada de Humahuaca',
        'Pucará de Tilcara',
        'Iguazu vs Tilcara Garganta del Diablo',
        '魔鬼之喉',
        '胡胡伊旅游',
      ],
    },
    zh: {
      title: '魔鬼之喉（蒂尔卡拉）— 徒步攻略、交通与门票指南',
      description:
        '阿根廷胡胡伊省蒂尔卡拉魔鬼之喉游览指南：如何前往（徒步或自驾）、门票与开放时间、最佳徒步季节、地图定位与实用贴士。',
      ogTitle: '魔鬼之喉（Garganta del Diablo）— 蒂尔卡拉徒步与交通指南',
      ogDescription:
        '蒂尔卡拉魔鬼之喉完整攻略：从镇中心徒步或自驾前往的路线、门票与开放时间、最佳季节与地图定位。与伊瓜苏瀑布同名观景点并非同一地点。',
      siteName: '魔鬼之喉旅行指南',
      keywords: [
        '魔鬼之喉 蒂尔卡拉',
        'Garganta del Diablo Tilcara',
        '胡胡伊 徒步',
        'Garganta del Diablo Jujuy',
        '魔鬼之喉 怎么去',
        '魔鬼之喉 门票',
        'Tilcara',
        'Quebrada de Humahuaca',
        'Pucará de Tilcara',
        '伊瓜苏 魔鬼之喉 区别',
        '天然峡谷',
        '胡胡伊旅游',
      ],
    },
    it: {
      title: 'Garganta del Diablo (Tilcara, Jujuy) - Guida e Trekking',
      description:
        'Guida alla Garganta del Diablo a Tilcara, Jujuy: come arrivare a piedi o in auto, biglietti e orari, periodo migliore per il trekking e mappa.',
      ogTitle: 'Garganta del Diablo — Guida trekking a Tilcara, Jujuy',
      ogDescription:
        'Tutto per visitare la Garganta del Diablo di Tilcara (Jujuy): sentiero a piedi o in auto, biglietti, orari, periodo migliore e mappa. Non è il belvedere dell’Iguazú.',
      siteName: 'Guida di Garganta del Diablo',
      keywords: [
        'Garganta del Diablo Tilcara',
        'sentiero Garganta del Diablo',
        'Trekking Jujuy',
        'Garganta del Diablo Jujuy',
        'come arrivare Garganta del Diablo',
        'Garganta del Diablo biglietto',
        'Tilcara',
        'Quebrada de Humahuaca',
        'Pucará de Tilcara',
        'differenza Iguazu Tilcara',
        '魔鬼之喉',
        '胡胡伊旅游',
      ],
    },
  };
  return map[locale] || map.es;
}
