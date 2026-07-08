export interface Seo {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  siteName: string;
  keywords: string[];
}

export function getSeo(locale: string): Seo {
  const map: Record<string, Seo> = {
    es: {
      title: 'Garganta del Diablo — Maravilla Natural en Jujuy, Argentina',
      description:
        'Guía de viaje y contexto patrimonial de la Garganta del Diablo en Tilcara, Jujuy, Argentina. Descubrí el cañón natural de altura y distinguí este sitio del homónimo de Iguazú.',
      ogTitle: 'Garganta del Diablo — Maravilla Natural en Jujuy, Argentina',
      ogDescription:
        'Guía de viaje a la Garganta del Diablo. Impresionante cañón natural en la Quebrada de Humahuaca, Patrimonio de la Humanidad UNESCO.',
      siteName: 'Guía de Garganta del Diablo',
      keywords: [
        'Garganta del Diablo',
        'Tilcara',
        'Jujuy tourism',
        'Argentina tourism',
        'Quebrada de Humahuaca',
        'UNESCO World Heritage',
        'Garganta del Diablo Tilcara',
        'Garganta del Diablo Jujuy',
        'Garganta del Diablo Iguazu diferencia',
        '魔鬼之喉',
        '胡胡伊旅游',
        'cañón natural',
        'cascada Jujuy',
      ],
    },
    en: {
      title: 'Garganta del Diablo — Natural Wonder in Jujuy, Argentina',
      description:
        'A guide to Garganta del Diablo in Tilcara, Jujuy, Argentina. Explore this high-altitude gorge in the Quebrada de Humahuaca and distinguish it from the better-known namesake at Iguazu Falls.',
      ogTitle: 'Garganta del Diablo — Natural Wonder in Jujuy, Argentina',
      ogDescription: 'A travel guide to Garganta del Diablo. A stunning natural gorge in the Quebrada de Humahuaca, UNESCO World Heritage.',
      siteName: 'Garganta del Diablo Travel Guide',
      keywords: [
        'Garganta del Diablo',
        'Tilcara',
        'Jujuy tourism',
        'Argentina tourism',
        'Quebrada de Humahuaca',
        'UNESCO World Heritage',
        'Garganta del Diablo Tilcara',
        'Garganta del Diablo Jujuy',
        'Iguazu vs Tilcara Garganta del Diablo',
        '魔鬼之喉',
        '胡胡伊旅游',
        'natural gorge',
        'waterfall Jujuy',
      ],
    },
    zh: {
      title: '魔鬼之喉（Garganta del Diablo）— 阿根廷胡胡伊省自然奇观',
      description:
        '魔鬼之喉（Garganta del Diablo）蒂尔卡拉旅行与科普指南，帮助辨析它与伊瓜苏同名景点的差异，深入了解胡胡伊省乌马瓦卡峡谷中的高海拔自然奇观。',
      ogTitle: '魔鬼之喉（Garganta del Diablo）— 阿根廷胡胡伊省自然奇观',
      ogDescription: '魔鬼之喉旅行指南——探索阿根廷乌马瓦卡峡谷世界遗产中的壮丽天然峡谷与瀑布。',
      siteName: '魔鬼之喉旅行指南',
      keywords: [
        'Garganta del Diablo',
        'Tilcara',
        'Jujuy tourism',
        'Argentina tourism',
        'Quebrada de Humahuaca',
        'UNESCO World Heritage',
        '蒂尔卡拉 魔鬼之喉',
        '胡胡伊 魔鬼之喉',
        '伊瓜苏 魔鬼之喉 区别',
        '魔鬼之喉',
        '胡胡伊旅游',
        '天然峡谷',
        '瀑布',
      ],
    },
    it: {
      title: 'Garganta del Diablo — Meraviglia Naturale a Jujuy, Argentina',
      description:
        'Guida alla Garganta del Diablo di Tilcara, Jujuy, Argentina. Esplora il canyon d’alta quota nella Quebrada de Humahuaca e distinguilo dall’omonimo più noto di Iguazú.',
      ogTitle: 'Garganta del Diablo — Meraviglia Naturale a Jujuy, Argentina',
      ogDescription: 'Guida alla Garganta del Diablo. Spettacolare canyon naturale nella Quebrada de Humahuaca, Patrimonio UNESCO.',
      siteName: 'Guida di Garganta del Diablo',
      keywords: [
        'Garganta del Diablo',
        'Tilcara',
        'Jujuy tourism',
        'Argentina tourism',
        'Quebrada de Humahuaca',
        'UNESCO World Heritage',
        'Garganta del Diablo Tilcara',
        'Garganta del Diablo Jujuy',
        'differenza Iguazu Tilcara',
        '魔鬼之喉',
        '胡胡伊旅游',
        'canyon naturale',
        'cascata Jujuy',
      ],
    },
  };
  return map[locale] || map.es;
}
