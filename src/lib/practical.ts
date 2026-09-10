import type { Locale } from '../i18n/config';

/**
 * 实用设施与补给信息（WC / 停车 / 餐饮 / 住宿 / 商超 / 加油充电 等）
 * 本站为非营利科普网站：仅按“设施类型”给出中立、类型化参考，
 * 不出现任何具体商户名称、不做商业推荐。
 */

export interface FacilityItem {
  icon: string;
  title: string;
  text: string;
  note: string;
}

export interface FacilitiesContent {
  title: string;
  intro: string;
  neutrality: string;
  items: FacilityItem[];
}

export const FACILITIES: Record<Locale, FacilitiesContent> = {
  zh: {
    title: '实用设施与补给信息',
    intro:
      '以下信息按“设施类型”整理，帮助你判断在蒂尔卡拉镇与峡谷步道周边可以获得哪些服务，便于安排行程与携带物资。',
    neutrality:
      '中立声明：本站为非营利科普平台，仅提供类型化参考，不展示、不推荐任何具体商户；价格、营业时间与可用性请以现场公示为准。',
    items: [
      {
        icon: '🚻',
        title: '卫生间',
        text: '景区入口与镇中心通常设有公共卫生间；峡谷步道内设施有限，建议出发前先在入口处使用。',
        note: '旺季可能需要排队，随身携带纸巾与免洗洗手液会更稳妥。',
      },
      {
        icon: '🅿️',
        title: '停车场',
        text: '镇中心与景点入口周边设有收费或免费的露天停车区域，以小型车位为主。',
        note: '旺季车位紧张，建议早到，或选择步行、接驳方式进入。',
      },
      {
        icon: '🍽️',
        title: '餐饮',
        text: '镇中心餐饮以安第斯地方菜、简餐与咖啡馆为主，适合徒步前后用餐与休整。',
        note: '高海拔地区建议清淡饮食、少量多餐，避免饮酒加重不适。',
      },
      {
        icon: '🛏️',
        title: '住宿',
        text: '镇上住宿类型涵盖青年旅舍、家庭旅馆、精品民宿与中小型酒店。',
        note: '建议提前预订，并选择带暖气、热水稳定的住宿以应对夜间低温。',
      },
      {
        icon: '🛒',
        title: '商超与补给',
        text: '镇内有小型超市、杂货店与面包房，可购买饮用水、干粮、水果与防晒用品。',
        note: '步道沿线补给点很少，请按行程足量携带饮水与能量食品。',
      },
      {
        icon: '⛽',
        title: '加油与充电',
        text: '区域内以燃油补给站为主，电动车充电设施相对有限，长途自驾需提前规划。',
        note: '离开主要城镇前加满油，山区路段距离较远、站点稀疏。',
      },
      {
        icon: '💵',
        title: '现金与 ATM',
        text: '镇内设有银行网点与自动取款机，部分小店与摊贩更倾向现金交易。',
        note: '建议携带适量当地货币现金作为备用，并分散存放。',
      },
      {
        icon: '🩹',
        title: '医疗与急救',
        text: '镇上有基础医疗点与药房，可处理轻微外伤与高原不适；重症需转往省会城市。',
        note: '建议自备常用药与个人处方药，并留意高原反应症状。',
      },
      {
        icon: '📶',
        title: '通信与网络',
        text: '镇中心移动信号与网络覆盖较好，进入峡谷步道后信号会明显减弱。',
        note: '进入步道前告知同伴行程，并提前下载离线地图。',
      },
    ],
  },
  en: {
    title: 'Practical Facilities & Supplies',
    intro:
      'The information below is organised by type of facility, so you can judge what services are available around Tilcara town and the gorge trail when planning your trip and packing.',
    neutrality:
      'Neutrality notice: this is a non-profit educational site. We list facility types only and do not feature, recommend or rank any specific business. Prices, opening hours and availability should be confirmed on site.',
    items: [
      {
        icon: '🚻',
        title: 'Restrooms',
        text: 'Public restrooms are generally available at the site entrance and in the town centre; facilities inside the gorge trail are limited.',
        note: 'Queues are possible in high season — carrying tissues and hand sanitiser is advisable.',
      },
      {
        icon: '🅿️',
        title: 'Parking',
        text: 'Paid and free open-air parking areas exist around the town centre and near the site entrance, mostly for smaller vehicles.',
        note: 'Parking fills up in high season; arrive early or use walking/transfer options.',
      },
      {
        icon: '🍽️',
        title: 'Dining',
        text: 'The town centre offers Andean regional dishes, light meals and cafés, convenient before or after the hike.',
        note: 'At altitude, lighter meals in smaller portions are kinder; avoid alcohol to reduce discomfort.',
      },
      {
        icon: '🛏️',
        title: 'Lodging',
        text: 'Accommodation types include hostels, family guesthouses, boutique inns and small hotels.',
        note: 'Book ahead and choose places with reliable heating and hot water for cold nights.',
      },
      {
        icon: '🛒',
        title: 'Groceries & supplies',
        text: 'Small supermarkets, convenience stores and bakeries sell drinking water, snacks, fruit and sun protection.',
        note: 'Resupply points along the trail are scarce — carry enough water and energy food for the full route.',
      },
      {
        icon: '⛽',
        title: 'Fuel & EV charging',
        text: 'The area is served mainly by fuel stations; electric-vehicle charging is limited, so plan longer drives in advance.',
        note: 'Fill up before leaving major towns; mountain stretches are long with sparse services.',
      },
      {
        icon: '💵',
        title: 'Cash & ATMs',
        text: 'Banks and ATMs are available in town, though smaller shops and vendors often prefer cash.',
        note: 'Carry a modest amount of local currency as backup and keep it split in different places.',
      },
      {
        icon: '🩹',
        title: 'Medical & first aid',
        text: 'Basic clinics and pharmacies in town handle minor injuries and altitude discomfort; serious cases are referred to the provincial capital.',
        note: 'Bring your usual medication and prescriptions, and watch for altitude-sickness symptoms.',
      },
      {
        icon: '📶',
        title: 'Connectivity',
        text: 'Mobile signal and internet are reasonable in the town centre but weaken noticeably inside the gorge.',
        note: 'Tell someone your plan before entering the trail and download offline maps in advance.',
      },
    ],
  },
  es: {
    title: 'Servicios e infraestructura práctica',
    intro:
      'La información siguiente está organizada por tipo de servicio, para que puedas evaluar qué hay disponible en Tilcara y sus alrededores al planificar el viaje y el equipaje.',
    neutrality:
      'Aviso de neutralidad: este es un sitio educativo sin fines de lucro. Solo indicamos tipos de servicio y no exhibimos, recomendamos ni clasificamos comercios concretos. Precios, horarios y disponibilidad deben confirmarse en el lugar.',
    items: [
      {
        icon: '🚻',
        title: 'Baños',
        text: 'Suele haber baños públicos en el acceso al sitio y en el centro del pueblo; dentro del sendero las instalaciones son limitadas.',
        note: 'En temporada alta puede haber filas; conviene llevar pañuelos y alcohol en gel.',
      },
      {
        icon: '🅿️',
        title: 'Estacionamiento',
        text: 'Hay sectores de estacionamiento pagos y gratuitos, a cielo abierto, cerca del centro y del acceso, en general para vehículos pequeños.',
        note: 'En temporada alta se llena; conviene llegar temprano o usar opciones peatonales o de traslado.',
      },
      {
        icon: '🍽️',
        title: 'Gastronomía',
        text: 'El centro ofrece cocina andina regional, comidas ligeras y cafés, prácticos antes o después de la caminata.',
        note: 'En altura conviene comer liviano y en porciones pequeñas; evitar alcohol reduce las molestias.',
      },
      {
        icon: '🛏️',
        title: 'Alojamiento',
        text: 'Las opciones incluyen hostels, hosterías familiares, posadas boutique y hoteles pequeños.',
        note: 'Reservá con antelación y elegí alojamientos con calefacción y agua caliente confiable por las noches frías.',
      },
      {
        icon: '🛒',
        title: 'Supermercados y suministros',
        text: 'Hay pequeños supermercados, almacenes y panaderías con agua potable, snacks, frutas y protección solar.',
        note: 'Los puntos de reabastecimiento en el sendero son escasos: llevá agua y comida suficiente para todo el recorrido.',
      },
      {
        icon: '⛽',
        title: 'Combustible y carga eléctrica',
        text: 'La zona se abastece principalmente con estaciones de combustible; la carga para vehículos eléctricos es limitada, planificá los tramos largos.',
        note: 'Cargá nafta antes de salir de las ciudades principales; los tramos de montaña son largos y con pocos servicios.',
      },
      {
        icon: '💵',
        title: 'Efectivo y cajeros',
        text: 'Hay bancos y cajeros automáticos en el pueblo, aunque los comercios pequeños y vendedores suelen preferir efectivo.',
        note: 'Llevá una cantidad moderada de moneda local como respaldo y distribuila en distintos lugares.',
      },
      {
        icon: '🩹',
        title: 'Salud y primeros auxilios',
        text: 'En el pueblo hay centros de salud básicos y farmacias para lesiones leves y mal de altura; los casos graves se derivan a la capital provincial.',
        note: 'Llevá tu medicación habitual y recetas, y prestá atención a los síntomas del mal de altura.',
      },
      {
        icon: '📶',
        title: 'Conectividad',
        text: 'La señal móvil e internet son razonables en el centro, pero se debilitan de forma notable dentro de la quebrada.',
        note: 'Avisá tu plan antes de entrar al sendero y descargá mapas sin conexión con antelación.',
      },
    ],
  },
  it: {
    title: 'Servizi pratici e approvvigionamenti',
    intro:
      'Le informazioni seguenti sono organizzate per tipo di servizio, per aiutarti a capire cosa è disponibile a Tilcara e dintorni quando pianifichi il viaggio e lo zaino.',
    neutrality:
      'Nota di neutralità: questo è un sito educativo senza scopo di lucro. Indichiamo solo tipi di servizio e non mostriamo, consigliamo né classifichiamo esercizi specifici. Prezzi, orari e disponibilità vanno verificati sul posto.',
    items: [
      {
        icon: '🚻',
        title: 'Bagni',
        text: 'Di norma ci sono bagni pubblici all’ingresso del sito e nel centro del paese; lungo il sentiero le strutture sono limitate.',
        note: 'In alta stagione può esserci coda; conviene portare fazzoletti e gel disinfettante.',
      },
      {
        icon: '🅿️',
        title: 'Parcheggio',
        text: 'Ci sono aree di parcheggio a pagamento e gratuite, all’aperto, vicino al centro e all’ingresso, in genere per veicoli piccoli.',
        note: 'In alta stagione si riempiono: meglio arrivare presto o usare opzioni a piedi o con navetta.',
      },
      {
        icon: '🍽️',
        title: 'Ristorazione',
        text: 'Il centro offre cucina andina regionale, pasti leggeri e caffè, comodi prima o dopo l’escursione.',
        note: 'In quota è meglio mangiare leggero e in piccole porzioni; evitare l’alcol riduce il disagio.',
      },
      {
        icon: '🛏️',
        title: 'Alloggio',
        text: 'Le opzioni includono ostelli, pensioni familiari, boutique inn e piccoli hotel.',
        note: 'Prenota in anticipo e scegli strutture con riscaldamento e acqua calda affidabili per le notti fredde.',
      },
      {
        icon: '🛒',
        title: 'Supermercati e provviste',
        text: 'Piccoli supermercati, alimentari e panetterie vendono acqua potabile, snack, frutta e protezione solare.',
        note: 'I punti di rifornimento lungo il sentiero sono scarsi: porta acqua e cibo a sufficienza per tutto il percorso.',
      },
      {
        icon: '⛽',
        title: 'Carburante e ricarica EV',
        text: 'La zona è servita soprattutto da distributori di carburante; la ricarica per veicoli elettrici è limitata, pianifica i tragitti lunghi.',
        note: 'Fai il pieno prima di lasciare le città principali; i tratti di montagna sono lunghi e con pochi servizi.',
      },
      {
        icon: '💵',
        title: 'Contanti e bancomat',
        text: 'In paese ci sono banche e bancomat, anche se i piccoli negozi e i venditori preferiscono spesso i contanti.',
        note: 'Porta una somma moderata di valuta locale come riserva e distribuiscila in posti diversi.',
      },
      {
        icon: '🩹',
        title: 'Sanità e primo soccorso',
        text: 'In paese ci sono centri sanitari di base e farmacie per piccoli traumi e mal di quota; i casi gravi vengono inviati al capoluogo provinciale.',
        note: 'Porta i tuoi farmaci abituali e le ricette, e attenzione ai sintomi del mal di quota.',
      },
      {
        icon: '📶',
        title: 'Connettività',
        text: 'Segnale mobile e internet sono discreti in centro, ma si indeboliscono nettamente dentro la gola.',
        note: 'Avvisa qualcuno del tuo programma prima di entrare nel sentiero e scarica le mappe offline in anticipo.',
      },
    ],
  },
};
