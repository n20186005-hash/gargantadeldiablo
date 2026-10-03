import type { Locale } from '../i18n/config';

/**
 * 单景点 SEO 实体绑定常量（NAP / 地理坐标 / 权威外链）
 * 变量表：DOMAIN_NAME、ATTRACTION_FULL_NAME、CITY_NAME、STATE_PROVINCE、
 * COUNTRY_NAME、COUNTRY_CODE_2LETTER、POSTAL_CODE、LATITUDE、LONGITUDE、
 * MAPS_SHARE_URL、MAPS_EMBED_SRC、NEARBY_LANDMARK、GOVT_TOURISM_URL
 */
export const ENTITY = {
  domain: 'gargantadeldiablo.com',
  fullName: 'Garganta del Diablo',
  shortName: "Devil's Throat",
  city: 'Tilcara',
  province: 'Jujuy',
  country: 'Argentina',
  countryCode: 'AR',
  postalCode: '4624',
  latitude: -23.5888421,
  longitude: -65.3863963,
  plusCode: 'CJ4G+55 Tilcara, Jujuy',
  mapsShareUrl: 'https://maps.app.goo.gl/5omkpMV3k3cC52ku5',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12997.472423225272!2d-65.3863963!3d-23.5888421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b335355ad9d4f%3A0x35263387856574c!2sGarganta%20del%20Diablo!5e1!3m2!1szh-CN!2s!4v1789006186560!5m2!1szh-CN!2s',
  govtTourismUrl: 'https://turismo.jujuy.gob.ar/',
  nationalTourismUrl: 'https://www.argentina.travel/',
  unescoUrl: 'https://whc.unesco.org/en/list/1116/',
  landmark1: 'Pucará de Tilcara',
  landmark2: 'Quebrada de Humahuaca',
  rating: 4.7,
  reviewCount: 5851,
  reviewCountLabel: '5,851',
  siteUrl: 'https://gargantadeldiablo.com',
} as const;

export interface EntitySource {
  name: string;
  url: string;
  desc: string;
}

export interface EntityContent {
  navEntity: string;
  navSources: string;
  breadcrumbHome: string;
  breadcrumbAria: string;
  intro: string;
  aboutTitle: string;
  aboutText: string;
  locationTitle: string;
  locationText: string;
  landmarksTitle: string;
  landmarksText: string;
  historyTitle: string;
  historyText: string;
  sourcesTitle: string;
  sourcesIntro: string;
  sources: EntitySource[];
  napNameLabel: string;
  napAddressLabel: string;
  napPlusCodeLabel: string;
  napGeoLabel: string;
  officialUpdates: string;
  officialTourismLabel: string;
  mapEmbedTitle: string;
  heroCitySuffix: string;
}

type SourceDef = { url: string; names: Record<Locale, string>; desc: Record<Locale, string> };

const SOURCE_DEFS: SourceDef[] = [
  {
    url: ENTITY.govtTourismUrl,
    names: {
      zh: '胡胡伊省官方旅游局 (turismo.jujuy.gob.ar)',
      en: 'Jujuy Official Tourism Board (turismo.jujuy.gob.ar)',
      es: 'Secretaría de Turismo de Jujuy (turismo.jujuy.gob.ar)',
      it: 'Ente del Turismo di Jujuy (turismo.jujuy.gob.ar)',
    },
    desc: {
      zh: '省级官方旅游机构，发布开放时间、路况与区域游览信息。',
      en: 'Provincial tourism authority publishing opening times, road conditions and regional visitor information.',
      es: 'Organismo provincial de turismo que publica horarios, estado de rutas e información de visitas.',
      it: 'Ente turistico provinciale che pubblica orari, viabilità e informazioni di visita.',
    },
  },
  {
    url: ENTITY.nationalTourismUrl,
    names: {
      zh: '阿根廷国家旅游门户 (argentina.travel)',
      en: 'Argentina National Tourism Portal (argentina.travel)',
      es: 'Portal Nacional de Turismo de Argentina (argentina.travel)',
      it: 'Portale Nazionale del Turismo argentino (argentina.travel)',
    },
    desc: {
      zh: '国家旅游推广门户，提供阿根廷西北部目的地总览。',
      en: 'National tourism promotion portal with an overview of destinations across north-western Argentina.',
      es: 'Portal nacional de promoción turística con una visión de los destinos del noroeste argentino.',
      it: 'Portale nazionale di promozione turistica con una panoramica sulle destinazioni del nord-ovest.',
    },
  },
  {
    url: ENTITY.unescoUrl,
    names: {
      zh: 'UNESCO 世界遗产中心 — 乌马瓦卡峡谷 (whc.unesco.org)',
      en: 'UNESCO World Heritage Centre — Quebrada de Humahuaca (whc.unesco.org)',
      es: 'Centro del Patrimonio Mundial UNESCO — Quebrada de Humahuaca (whc.unesco.org)',
      it: 'Centro del Patrimonio Mondiale UNESCO — Quebrada de Humahuaca (whc.unesco.org)',
    },
    desc: {
      zh: '世界遗产官方档案，记录 2003 年列入名录的评定依据。',
      en: 'Official World Heritage archive documenting the 2003 inscription criteria.',
      es: 'Archivo oficial del Patrimonio Mundial con los criterios de inscripción de 2003.',
      it: 'Archivio ufficiale del Patrimonio Mondiale con i criteri di iscrizione del 2003.',
    },
  },
  {
    url: 'https://larutanatural.gob.ar/',
    names: {
      zh: '阿根廷「自然之路」生态旅游计划 (larutanatural.gob.ar)',
      en: "La Ruta Natural — Argentina's ecotourism programme (larutanatural.gob.ar)",
      es: 'La Ruta Natural — programa de ecoturismo de Argentina (larutanatural.gob.ar)',
      it: "La Ruta Natural — programma di ecoturismo argentino (larutanatural.gob.ar)",
    },
    desc: {
      zh: '国家生态旅游计划，提供徒步与自然保护出行建议。',
      en: 'National ecotourism programme offering hiking and nature-conservation travel guidance.',
      es: 'Programa nacional de ecoturismo con recomendaciones de senderismo y conservación.',
      it: 'Programma nazionale di ecoturismo con consigli su escursioni e conservazione.',
    },
  },
  {
    url: 'https://www.argentina.gob.ar/jujuy',
    names: {
      zh: '阿根廷国家政府官网 — 胡胡伊省专页 (argentina.gob.ar)',
      en: 'Argentina Government — Jujuy Province page (argentina.gob.ar)',
      es: 'Gobierno de Argentina — página de Jujuy (argentina.gob.ar)',
      it: 'Governo argentino — pagina di Jujuy (argentina.gob.ar)',
    },
    desc: {
      zh: '政府官方政务与公共服务入口，用于核实行政信息。',
      en: 'Official government portal for administrative and public-service verification.',
      es: 'Portal oficial del gobierno para verificar información administrativa.',
      it: 'Portale ufficiale del governo per verificare informazioni amministrative.',
    },
  },
  {
    url: ENTITY.mapsShareUrl,
    names: {
      zh: 'Google 地图实体页 — Garganta del Diablo',
      en: 'Google Maps entity page — Garganta del Diablo',
      es: 'Ficha de Google Maps — Garganta del Diablo',
      it: 'Scheda Google Maps — Garganta del Diablo',
    },
    desc: {
      zh: '地图侧的官方实体记录，包含评分 4.7（5,851 条评价）。',
      en: 'The map-side entity record, including the 4.7 rating (5,851 reviews).',
      es: 'Registro de la entidad en el mapa, con valoración 4,7 (5.851 opiniones).',
      it: "Record dell'entità sulla mappa, con valutazione 4,7 (5.851 recensioni).",
    },
  },
];

function buildSources(locale: Locale): EntitySource[] {
  return SOURCE_DEFS.map((d) => ({ name: d.names[locale], url: d.url, desc: d.desc[locale] }));
}

export const entityContent: Record<Locale, EntityContent> = {
  zh: {
    navEntity: '景点信息',
    navSources: '资料来源',
    breadcrumbHome: '首页',
    breadcrumbAria: '地理层级面包屑导航',
    intro:
      '欢迎来到 **Garganta del Diablo**（魔鬼之喉），它被广泛视为阿根廷胡胡伊省蒂尔卡拉（Tilcara）的核心自然地标。这里位于 **蒂尔卡拉（Tilcara）**、**胡胡伊省（Jujuy）**、**阿根廷（Argentina）** 的中心地带，是前往乌马瓦卡峡谷（Quebrada de Humahuaca）地区的旅行者最主要的探访枢纽。',
    aboutTitle: '关于 Garganta del Diablo',
    aboutText:
      'Garganta del Diablo 是位于蒂尔卡拉镇外的一处高海拔天然峡谷与瀑布步道，海拔约 **2,450 米**，由季节性水流长期侵蚀赭红色沉积岩层而成。它常被简称为“魔鬼之喉”（Devil\'s Throat），与伊瓜苏瀑布的同名观景点并非同一地点。',
    locationTitle: '位置与游览方式：蒂尔卡拉的魔鬼之喉',
    locationText:
      '景点位于 **Paraje Garganta del Diablo, Tilcara, Jujuy, Argentina**（Google 定位码 **CJ4G+55**，坐标 **-23.5888421, -65.3863963**）。从蒂尔卡拉镇中心步行或短程接驳即可抵达步道入口，往返徒步约 **2–3 小时**。',
    landmarksTitle: '魔鬼之喉周边的地标与景点',
    landmarksText:
      '在探访 **Garganta del Diablo** 时，游客可以轻松串联周边的历史地标与兴趣点，包括 **Pucará de Tilcara** 考古遗址与 **Quebrada de Humahuaca** 世界文化遗产廊道。',
    historyTitle: 'Garganta del Diablo 的历史与意义',
    historyText:
      '峡谷所在的乌马瓦卡峡谷于 **2003 年** 被联合国教科文组织列入世界文化遗产，记录了从史前狩猎采集、印加帝国到殖民时代长达万年的文化演变。魔鬼之喉既是地质奇观，也是理解安第斯高原人与自然关系的重要入口。',
    sourcesTitle: '资料来源与延伸阅读',
    sourcesIntro:
      '本页信息综合自当地官方旅游机构、国家旅游门户与 UNESCO 世界遗产档案，供进一步核实与延伸阅读。',
    sources: buildSources('zh'),
    napNameLabel: '景点名称',
    napAddressLabel: '地址',
    napPlusCodeLabel: '定位码',
    napGeoLabel: '坐标',
    officialUpdates: '如需官方更新与区域旅游信息，请访问',
    officialTourismLabel: '阿根廷 / 胡胡伊省官方旅游门户',
    mapEmbedTitle: 'Garganta del Diablo 位置地图',
    heroCitySuffix: '（蒂尔卡拉，胡胡伊）',
  },
  en: {
    navEntity: 'About',
    navSources: 'Sources',
    breadcrumbHome: 'Home',
    breadcrumbAria: 'Geographic breadcrumb navigation',
    intro:
      "Welcome to **Garganta del Diablo**, widely recognized as the central **Devil's Throat** landmark of Tilcara. Located in the heart of **Tilcara**, **Jujuy**, **Argentina**, this destination serves as a primary hub for travellers exploring the Quebrada de Humahuaca region.",
    aboutTitle: 'About Garganta del Diablo',
    aboutText:
      "Garganta del Diablo is a high-altitude natural gorge and waterfall trail just outside Tilcara, at roughly **2,450 m** above sea level, carved by seasonal water flows through layered ochre sedimentary rock. It is commonly shortened to “Devil's Throat” and is not the same place as the Iguazu Falls viewpoint of the same name.",
    locationTitle: "Location & How to Visit the Devil's Throat in Tilcara",
    locationText:
      'The site is located at **Paraje Garganta del Diablo, Tilcara, Jujuy, Argentina** (Google plus code **CJ4G+55**, coordinates **-23.5888421, -65.3863963**). The trailhead is a short walk or transfer from Tilcara town centre, with a round-trip hike of about **2–3 hours**.',
    landmarksTitle: "Landmarks & Attractions Around the Devil's Throat",
    landmarksText:
      'When visiting **Garganta del Diablo**, travellers can easily explore surrounding historical landmarks and points of interest, including the **Pucará de Tilcara** archaeological site and the **Quebrada de Humahuaca** World Heritage corridor.',
    historyTitle: 'History & Significance of Garganta del Diablo',
    historyText:
      'The wider Quebrada de Humahuaca was inscribed as a UNESCO World Heritage Site in **2003**, recording ten thousand years of cultural continuity from hunter-gatherers and the Inca to the colonial era. The gorge is both a geological spectacle and an entry point for understanding Andean human–landscape relations.',
    sourcesTitle: 'Sources & Further Reading',
    sourcesIntro:
      'Information on this page is compiled from regional official tourism bodies, the national tourism portal and the UNESCO World Heritage archive, for verification and further reading.',
    sources: buildSources('en'),
    napNameLabel: 'Name',
    napAddressLabel: 'Address',
    napPlusCodeLabel: 'Plus code',
    napGeoLabel: 'Coordinates',
    officialUpdates: 'For official updates and regional tourism information, visit',
    officialTourismLabel: 'Argentina / Jujuy Official Tourism Portal',
    mapEmbedTitle: 'Garganta del Diablo location map',
    heroCitySuffix: ' (Tilcara, Jujuy)',
  },
  es: {
    navEntity: 'Ficha',
    navSources: 'Fuentes',
    breadcrumbHome: 'Inicio',
    breadcrumbAria: 'Navegación de migas de pan geográficas',
    intro:
      'Bienvenido a la **Garganta del Diablo**, reconocida como el principal cañón natural de Tilcara. Ubicada en el corazón de **Tilcara**, **Jujuy**, **Argentina**, este destino funciona como punto de referencia central para quienes recorren la Quebrada de Humahuaca.',
    aboutTitle: 'Sobre la Garganta del Diablo',
    aboutText:
      'La Garganta del Diablo es una quebrada natural de altura con cascada, a las afueras de Tilcara, a unos **2.450 m** sobre el nivel del mar, tallada por crecidas estacionales sobre estratos sedimentarios ocres. Se la conoce como “Garganta del Diablo” y no es el mismo lugar que el mirador homónimo de las Cataratas del Iguazú.',
    locationTitle: 'Ubicación y cómo visitar la Garganta del Diablo en Tilcara',
    locationText:
      'El sitio se ubica en **Paraje Garganta del Diablo, Tilcara, Jujuy, Argentina** (plus code **CJ4G+55**, coordenadas **-23.5888421, -65.3863963**). El acceso al sendero está a poca distancia del centro de Tilcara, con una caminata de ida y vuelta de unas **2–3 horas**.',
    landmarksTitle: 'Lugares y atractivos alrededor de la Garganta del Diablo',
    landmarksText:
      'Al visitar la **Garganta del Diablo**, los viajeros pueden explorar fácilmente sitios históricos y puntos de interés cercanos, como el **Pucará de Tilcara** y el corredor Patrimonio de la Humanidad de la **Quebrada de Humahuaca**.',
    historyTitle: 'Historia y significado de la Garganta del Diablo',
    historyText:
      'La Quebrada de Humahuaca fue declarada Patrimonio Mundial de la UNESCO en **2003** y registra diez mil años de continuidad cultural, desde cazadores-recolectores y el Inca hasta la época colonial. La garganta es a la vez un espectáculo geológico y una puerta para entender la relación andina entre personas y paisaje.',
    sourcesTitle: 'Fuentes y lecturas complementarias',
    sourcesIntro:
      'La información de esta página se basa en organismos oficiales de turismo regional, el portal nacional de turismo y el archivo del Patrimonio Mundial de la UNESCO.',
    sources: buildSources('es'),
    napNameLabel: 'Nombre',
    napAddressLabel: 'Dirección',
    napPlusCodeLabel: 'Plus code',
    napGeoLabel: 'Coordenadas',
    officialUpdates: 'Para información oficial y novedades turísticas regionales, visitá',
    officialTourismLabel: 'Portal Oficial de Turismo de Argentina / Jujuy',
    mapEmbedTitle: 'Mapa de ubicación de la Garganta del Diablo',
    heroCitySuffix: '',
  },
  it: {
    navEntity: 'Scheda',
    navSources: 'Fonti',
    breadcrumbHome: 'Home',
    breadcrumbAria: 'Navigazione breadcrumb geografica',
    intro:
      "Benvenuti alla **Garganta del Diablo**, riconosciuta come la principale gola naturale di Tilcara. Situata nel cuore di **Tilcara**, **Jujuy**, **Argentina**, è un punto di riferimento centrale per chi esplora la Quebrada de Humahuaca.",
    aboutTitle: 'Informazioni sulla Garganta del Diablo',
    aboutText:
      "La Garganta del Diablo è una gola naturale d'alta quota con cascata, poco fuori Tilcara, a circa **2.450 m** sul livello del mare, scavata da piene stagionali negli strati sedimentari ocra. È nota come “Gola del Diavolo” e non coincide con l'omonimo belvedere delle Cascate di Iguazú.",
    locationTitle: 'Posizione e come visitare la Garganta del Diablo a Tilcara',
    locationText:
      "Il sito si trova in **Paraje Garganta del Diablo, Tilcara, Jujuy, Argentina** (plus code **CJ4G+55**, coordinate **-23.5888421, -65.3863963**). L'accesso al sentiero dista una breve camminata dal centro di Tilcara; l'escursione andata e ritorno richiede circa **2–3 ore**.",
    landmarksTitle: 'Luoghi e attrazioni intorno alla Garganta del Diablo',
    landmarksText:
      "Visitando la **Garganta del Diablo**, i viaggiatori possono esplorare facilmente siti storici e punti d'interesse vicini, tra cui il **Pucará de Tilcara** e il corridoio Patrimonio UNESCO della **Quebrada de Humahuaca**.",
    historyTitle: 'Storia e significato della Garganta del Diablo',
    historyText:
      "La Quebrada de Humahuaca è stata iscritta come Patrimonio Mondiale UNESCO nel **2003** e documenta diecimila anni di continuità culturale, dai cacciatori-raccoglitori e dagli Inca fino all'epoca coloniale. La gola è al tempo stesso uno spettacolo geologico e una chiave per comprendere il rapporto andino tra persone e paesaggio.",
    sourcesTitle: 'Fonti e approfondimenti',
    sourcesIntro:
      "Le informazioni di questa pagina sono tratte da enti ufficiali del turismo regionale, dal portale nazionale del turismo e dall'archivio del Patrimonio Mondiale UNESCO.",
    sources: buildSources('it'),
    napNameLabel: 'Nome',
    napAddressLabel: 'Indirizzo',
    napPlusCodeLabel: 'Plus code',
    napGeoLabel: 'Coordinate',
    officialUpdates: 'Per aggiornamenti ufficiali e informazioni turistiche regionali, visita',
    officialTourismLabel: 'Portale Ufficiale del Turismo di Argentina / Jujuy',
    mapEmbedTitle: 'Mappa della posizione della Garganta del Diablo',
    heroCitySuffix: ' (Tilcara, Jujuy)',
  },
};

/**
 * 官方核验信息（E-E-A-T）：胡胡伊省旅游局《Manual para Guías Idóneos — Quebrada》明确给出的事实。
 * 用于首页「Información verificada」板块，不杜撰数字、标注来源与更新时间。
 */
const GOVT_TOURISM_MANUAL_URL =
  'https://www.turismo.jujuy.gob.ar/wp-content/uploads/Manual-para-Guias-Idoneos_QUEBRADA_v5.pdf';

export interface VerifiedFact {
  icon: string;
  label: string;
  value: string;
}

export interface VerifiedInfo {
  title: string;
  intro: string;
  facts: VerifiedFact[];
  community: string;
  sourceLabel: string;
  sourceName: string;
  sourceUrl: string;
  updated: string;
}

export const VERIFIED_INFO: Record<Locale, VerifiedInfo> = {
  es: {
    title: 'Información verificada para visitar',
    intro:
      'Los datos siguientes provienen del material oficial de la Secretaría de Turismo de Jujuy. No inventamos cifras: distancia, cascada y gestión comunitaria están documentados en su guía de la Quebrada de Humahuaca.',
    facts: [
      { icon: '🚗', label: 'En vehículo', value: '~6 km desde Tilcara' },
      { icon: '🥾', label: 'A pie', value: '~4 km de sendero' },
      { icon: '🌊', label: 'Cascada', value: '~15 m de altura' },
      { icon: '💵', label: 'Entrada', value: 'paga (a cargo de la comunidad)' },
      { icon: '🏞️', label: 'Comunidad', value: 'Ayllu Mama Qolla' },
      { icon: '🚻', label: 'Servicios', value: 'baños en el lugar' },
    ],
    community:
      'El sitio se encuentra en tierras de la **Comunidad Aborigen Ayllu Mama Qolla**, que se encarga del mantenimiento y la recepción de visitantes, y cobra entrada. Desde la toma de agua se camina unas 20 minutos más por el lecho del río hasta la cascada natural.',
    sourceLabel: 'Fuente',
    sourceName: 'Secretaría de Turismo de Jujuy — Manual para Guías Idóneos (Quebrada de Humahuaca)',
    sourceUrl: GOVT_TOURISM_MANUAL_URL,
    updated: 'Última actualización: octubre de 2026',
  },
  en: {
    title: 'Verified visitor information',
    intro:
      'The figures below come from the official Jujuy Tourism Board guide to the Quebrada de Humahuaca. We do not invent numbers: distance, waterfall and community management are documented there.',
    facts: [
      { icon: '🚗', label: 'By vehicle', value: '~6 km from Tilcara' },
      { icon: '🥾', label: 'On foot', value: '~4 km trail' },
      { icon: '🌊', label: 'Waterfall', value: '~15 m high' },
      { icon: '💵', label: 'Entrance', value: 'paid (community-run)' },
      { icon: '🏞️', label: 'Community', value: 'Ayllu Mama Qolla' },
      { icon: '🚻', label: 'Facilities', value: 'toilets on site' },
    ],
    community:
      'The site lies on land of the **Comunidad Aborigen Ayllu Mama Qolla**, which maintains the trail, receives visitors and charges entrance. From the water intake it is about a 20-minute walk along the riverbed to the natural waterfall.',
    sourceLabel: 'Source',
    sourceName: 'Jujuy Tourism Board — Manual for Certified Guides (Quebrada de Humahuaca)',
    sourceUrl: GOVT_TOURISM_MANUAL_URL,
    updated: 'Last updated: October 2026',
  },
  zh: {
    title: '经官方核证的信息',
    intro:
      '以下数据来自胡胡伊省旅游局《乌马瓦卡峡谷向导手册》。我们不杜撰数字：距离、瀑布与社区管理均在官方资料中有据可查。',
    facts: [
      { icon: '🚗', label: '自驾', value: '距蒂尔卡拉约 6 公里' },
      { icon: '🥾', label: '徒步', value: '约 4 公里步道' },
      { icon: '🌊', label: '瀑布', value: '约 15 米高' },
      { icon: '💵', label: '门票', value: '收费（由社区管理）' },
      { icon: '🏞️', label: '社区', value: 'Ayllu Mama Qolla 原住民社区' },
      { icon: '🚻', label: '设施', value: '现场设有卫生间' },
    ],
    community:
      '景点位于 **Ayllu Mama Qolla 原住民社区** 的土地上，由社区负责步道维护与游客接待并收取门票。从取水设施沿河床再步行约 20 分钟可到达天然瀑布。',
    sourceLabel: '来源',
    sourceName: '胡胡伊省旅游局 —《乌马瓦卡峡谷认证向导手册》',
    sourceUrl: GOVT_TOURISM_MANUAL_URL,
    updated: '最后更新：2026 年 10 月',
  },
  it: {
    title: 'Informazioni verificate per la visita',
    intro:
      'I dati seguenti provengono dalla guida ufficiale della Secretaría de Turismo di Jujuy sulla Quebrada de Humahuaca. Non inventiamo cifre: distanza, cascata e gestione comunitaria sono documentate lì.',
    facts: [
      { icon: '🚗', label: 'In auto', value: '~6 km da Tilcara' },
      { icon: '🥾', label: 'A piedi', value: '~4 km di sentiero' },
      { icon: '🌊', label: 'Cascata', value: '~15 m di altezza' },
      { icon: '💵', label: 'Ingresso', value: 'a pagamento (gestito dalla comunità)' },
      { icon: '🏞️', label: 'Comunità', value: 'Ayllu Mama Qolla' },
      { icon: '🚻', label: 'Servizi', value: 'bagni in loco' },
    ],
    community:
      'Il sito si trova su terre della **Comunidad Aborigen Ayllu Mama Qolla**, che gestisce la manutenzione, accoglie i visitatori e riscuote l’ingresso. Dalla presa d’acqua si cammina circa 20 minuti lungo l’alveo fino alla cascata naturale.',
    sourceLabel: 'Fonte',
    sourceName: 'Secretaría de Turismo di Jujuy — Manuale per Guide Abilitate (Quebrada de Humahuaca)',
    sourceUrl: GOVT_TOURISM_MANUAL_URL,
    updated: 'Ultimo aggiornamento: ottobre 2026',
  },
};

/** 图片版权声明（页脚 + 来源板块展示） */
export const IMAGE_CREDIT: Record<Locale, string> = {
  zh: '图片版权声明：本网站所展示的所有图片产权及版权均归原摄影者所有。',
  en: 'Image credit: all images displayed on this website remain the property and copyright of their original photographers.',
  es: 'Crédito de imágenes: todas las imágenes mostradas en este sitio web son propiedad y están protegidas por los derechos de autor de sus fotógrafos originales.',
  it: 'Crediti immagini: tutte le immagini mostrate su questo sito rimangono di proprietà e coperte da copyright dei rispettivi fotografi originali.',
};

/** 追加 FAQ（用于 Featured Snippet / AI 概览卡片） */
export const ENTITY_FAQ: Record<Locale, { q: string; a: string }[]> = {
  zh: [
    {
      q: 'Garganta del Diablo 位于哪里？',
      a: 'Garganta del Diablo 位于阿根廷胡胡伊省蒂尔卡拉（Tilcara），地址为 Paraje Garganta del Diablo，Google 定位码为 CJ4G+55，坐标约为 -23.5888421, -65.3863963。',
    },
    {
      q: '蒂尔卡拉的魔鬼之喉和伊瓜苏的魔鬼之喉是同一个地方吗？',
      a: '不是。伊瓜苏的 Garganta del Diablo 是著名瀑布观景点，蒂尔卡拉的 Garganta del Diablo 是高海拔峡谷徒步目的地，两者的地貌、位置与旅行体验完全不同。',
    },
    {
      q: '游览 Garganta del Diablo 需要购买门票吗？',
      a: '需要购买门票，具体票价以现场公布为准，门票收入用于步道维护与生态保护。建议携带现金（阿根廷比索）并提前确认开放时间。',
    },
    {
      q: 'Garganta del Diablo 是免费参观的吗？',
      a: '步道区域需购票进入，周边峡谷观景区可自由通行。请以现场公示为准，并在雨季注意水量变化与安全提示。',
    },
  ],
  en: [
    {
      q: 'Where is Garganta del Diablo located?',
      a: 'Garganta del Diablo is located in Tilcara, Jujuy, Argentina, at Paraje Garganta del Diablo, with Google plus code CJ4G+55 and coordinates approximately -23.5888421, -65.3863963.',
    },
    {
      q: "Is Tilcara's Devil's Throat the same as the one at Iguazu Falls?",
      a: "No. Iguazu's Garganta del Diablo is the famous waterfall viewpoint, while Tilcara's is a high-altitude gorge hiking destination. They differ in landscape, location and visitor experience.",
    },
    {
      q: 'Do you need a ticket to visit Garganta del Diablo?',
      a: 'Yes, an entrance fee applies and the exact price is displayed on site; ticket revenue funds trail maintenance and ecological conservation. Carry cash (Argentine pesos) and confirm opening hours in advance.',
    },
    {
      q: 'Is Garganta del Diablo free to visit?',
      a: 'The trail area requires a paid ticket, while surrounding gorge viewpoints are openly accessible. Always check on-site notices and seasonal water conditions before setting out.',
    },
  ],
  es: [
    {
      q: '¿Dónde se ubica la Garganta del Diablo?',
      a: 'La Garganta del Diablo se ubica en Tilcara, Jujuy, Argentina, en Paraje Garganta del Diablo, con plus code CJ4G+55 y coordenadas aproximadas -23.5888421, -65.3863963.',
    },
    {
      q: '¿La Garganta del Diablo de Tilcara es la misma que la de Iguazú?',
      a: 'No. La de Iguazú es el famoso mirador de cataratas; la de Tilcara es una quebrada de altura para senderismo. Cambian el paisaje, la ubicación y la experiencia de visita.',
    },
    {
      q: '¿Hay que pagar entrada para visitar la Garganta del Diablo?',
      a: 'Sí, se cobra entrada y el precio exacto se exhibe en el lugar; lo recaudado financia el mantenimiento de senderos y la conservación ecológica. Llevá efectivo (pesos argentinos) y confirmá horarios.',
    },
    {
      q: '¿Es gratis visitar la Garganta del Diablo?',
      a: 'El sector del sendero requiere entrada paga, mientras que los miradores del entorno son de acceso libre. Verificá los avisos en el lugar y el caudal antes de salir.',
    },
  ],
  it: [
    {
      q: 'Dove si trova la Garganta del Diablo?',
      a: 'La Garganta del Diablo si trova a Tilcara, Jujuy, Argentina, in Paraje Garganta del Diablo, con plus code CJ4G+55 e coordinate approssimative -23.5888421, -65.3863963.',
    },
    {
      q: "La Garganta del Diablo di Tilcara è la stessa dell'Iguazú?",
      a: "No. Quella dell'Iguazú è il celebre belvedere della cascata; quella di Tilcara è una gola d'alta quota per escursioni. Cambiano paesaggio, posizione ed esperienza di visita.",
    },
    {
      q: 'Serve un biglietto per visitare la Garganta del Diablo?',
      a: "Sì, l'ingresso è a pagamento e il prezzo esatto è esposto in loco; il ricavato finanzia la manutenzione dei sentieri e la conservazione. Porta contanti (pesos argentini) e verifica gli orari.",
    },
    {
      q: 'La visita alla Garganta del Diablo è gratuita?',
      a: "L'area del sentiero richiede un biglietto, mentre i punti panoramici circostanti sono ad accesso libero. Controlla gli avvisi in loco e le condizioni del corso d'acqua prima di partire.",
    },
  ],
};

/** 图片 Alt 语义绑定（实体语义命名） */
export function heroAlt(locale: Locale): string {
  const map: Record<Locale, string> = {
    zh: `${ENTITY.fullName} — ${ENTITY.city}, ${ENTITY.country} 主视觉`,
    en: `${ENTITY.fullName} — main view in ${ENTITY.city}, ${ENTITY.country}`,
    es: `${ENTITY.fullName} — vista principal en ${ENTITY.city}, ${ENTITY.country}`,
    it: `${ENTITY.fullName} — vista principale a ${ENTITY.city}, ${ENTITY.country}`,
  };
  return map[locale];
}

export function landmarkAlt(locale: Locale, index: number): string {
  const place = index === 1 ? ENTITY.landmark2 : ENTITY.landmark1;
  const map: Record<Locale, string> = {
    zh: `${place} — ${ENTITY.city} 的魔鬼之喉周边景观`,
    en: `${place} near ${ENTITY.shortName} in ${ENTITY.city}`,
    es: `${place} cerca de la Garganta del Diablo en ${ENTITY.city}`,
    it: `${place} vicino alla Garganta del Diablo a ${ENTITY.city}`,
  };
  return map[locale];
}

export function galleryAlt(locale: Locale, index: number): string {
  const map: Record<Locale, string> = {
    zh: `${ENTITY.fullName}（${ENTITY.city}，${ENTITY.country}）— 图集第 ${index} 张`,
    en: `${ENTITY.fullName} (${ENTITY.city}, ${ENTITY.country}) — gallery photo ${index}`,
    es: `${ENTITY.fullName} (${ENTITY.city}, ${ENTITY.country}) — foto de galería ${index}`,
    it: `${ENTITY.fullName} (${ENTITY.city}, ${ENTITY.country}) — foto galleria ${index}`,
  };
  return map[locale];
}
