import type { Locale } from '../i18n/config';

/**
 * 深度科普内容：历史传说、地质自然、术语与季节
 * 面向“专业景点科普落地页”，内容以科普与文化介绍为主，传说部分明确标注为民俗叙事。
 */

export interface DeepDiveItem {
  name: string;
  text: string;
}

export interface DeepDiveSection {
  title: string;
  intro: string;
  items: DeepDiveItem[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface SeasonRow {
  season: string;
  months: string;
  text: string;
}

export interface DeepDiveContent {
  legends: DeepDiveSection;
  geology: DeepDiveSection;
  nature: DeepDiveSection;
  glossary: { title: string; intro: string; terms: GlossaryTerm[] };
  seasons: { title: string; intro: string; rows: SeasonRow[] };
}

export const DEEP_DIVE: Record<Locale, DeepDiveContent> = {
  zh: {
    legends: {
      title: '传说与民间故事',
      intro:
        '在安第斯原住民的口头传统中，峡谷、山峦与水源都被赋予生命与灵性。以下叙事属于当地民间传说与文化记忆，并非科学考证结论，但它们是理解这片土地的重要文化线索。',
      items: [
        {
          name: '“魔鬼之喉”的由来',
          text: '当地口传叙事认为，这道狭长而深邃的峡谷是“魔鬼”撕裂山体留下的裂口；当山风穿过岩壁，低沉的共鸣被形容为魔鬼的吼声，峡谷也因此得名。',
        },
        {
          name: '帕查玛玛（大地母亲）',
          text: '帕查玛玛是安第斯人崇敬的大地母亲。当地人在远行、播种或建房前，常以少量食物、饮品或古柯叶向大地致意，感谢土地的馈赠，这一仪式被称为 corpachada。',
        },
        {
          name: '山灵与守护者',
          text: '传说山脉由山灵（如 Llastay、Coquena 一类的守护者）看护，它们庇佑野生的骆马与羊驼；伤害或滥捕这些动物被认为会招致山灵的惩罚。',
        },
        {
          name: '峡谷中的“宝藏”传说',
          text: '关于峡谷岩壁间藏有古老宝藏或“被施了魔法的城”的故事在民间流传已久，折射出当地对前西班牙时期历史与失落文明的想象。',
        },
      ],
    },
    geology: {
      title: '地质与气候：峡谷是如何形成的',
      intro:
        '乌马瓦卡峡谷的景观由漫长的地质过程塑造。理解这些过程，有助于读懂眼前层层叠叠的岩壁与丰富色彩。',
      items: [
        {
          name: '古老的海相沉积',
          text: '峡谷两侧的岩层多为数亿年前的海相与陆相沉积岩，记录了这片土地曾被海洋覆盖、随后又随安第斯造山运动抬升的历史。',
        },
        {
          name: '抬升与侵蚀',
          text: '安第斯山脉的隆升把地层抬高，随后河流切割与长期风化侵蚀，逐渐凿出如今狭长而陡峭的峡谷形态。',
        },
        {
          name: '层理与色彩',
          text: '岩层中不同矿物在氧化后呈现红、紫、赭、灰等色彩，铁氧化物多呈红褐色，因此峡谷在不同光照下会显现明显的色带变化。',
        },
        {
          name: '海拔与气候',
          text: '峡谷核心区海拔约 2,400–2,600 米，属干旱气候，日照强烈、昼夜温差大，雨季集中在南半球夏季（约 1–3 月）。',
        },
        {
          name: '强烈的太阳辐射',
          text: '高海拔与干燥空气使紫外线异常强烈，即便阴天也需做好防晒，并注意补水、循序渐进地适应海拔。',
        },
      ],
    },
    nature: {
      title: '动植物与自然生态',
      intro:
        '在干燥而高寒的环境中，这里演化出独特的动植物群落。观察时请保持距离，不投喂、不采摘，尊重野生动植物的栖息地。',
      items: [
        {
          name: '典型植被',
          text: '常见植物包括高大的柱状仙人掌（cardón）、耐旱灌木（如 tola）以及用作薪材与建材的乔木（如 queñoa、churqui），共同构成干旱山地景观。',
        },
        {
          name: '代表性动物',
          text: '区域内可见骆马（vicuña）、原驼（guanaco）、家养羊驼（llama）与安第斯 vizcacha 等；天空偶有安第斯神鹫（cóndor）盘旋。',
        },
        {
          name: '鸟类与微型生境',
          text: '峡谷与河岸为多种高原鸟类提供栖息与觅食环境，河岸湿地在干旱背景中尤为珍贵。',
        },
        {
          name: '文化与自然双重价值',
          text: '乌马瓦卡峡谷因自然景观与活态文化并存，于 2003 年被列入联合国教科文组织世界遗产名录。',
        },
      ],
    },
    glossary: {
      title: '术语小词典',
      intro: '了解以下常用词汇，有助于读懂路牌、展板与当地人的讲述。',
      terms: [
        { term: 'Pachamama', definition: '安第斯信仰中的“大地母亲”，象征自然与丰饶，是当地重要的文化概念。' },
        { term: 'Pucará', definition: '前西班牙时期的防御性聚落或堡垒遗址，多建于地势高处；蒂尔卡拉即有一处著名遗址。' },
        { term: 'Quebrada', definition: '西班牙语，意为“峡谷 / 深切河谷”，乌马瓦卡峡谷即 Quebrada de Humahuaca。' },
        { term: 'Apachita', definition: '安第斯山口或路旁的祭祀石堆，旅人常在此留下石块或祭品以示敬意。' },
        { term: 'Corpachada', definition: '向帕查玛玛献祭的仪式，用以表达感谢与祈福。' },
        { term: 'Cardón', definition: '当地对柱状仙人掌的称呼，是干旱山地景观的标志性植物。' },
      ],
    },
    seasons: {
      title: '最佳旅行季节',
      intro: '不同季节体验差异明显，以下为一般性参考，实际天气请以出行前的预报为准。',
      rows: [
        { season: '干季', months: '5–9 月', text: '降水少、晴天多、能见度高，是徒步与摄影的常见旺季；夜间寒冷，需备保暖衣物。' },
        { season: '雨季', months: '1–3 月', text: '午后阵雨概率较高，峡谷色彩更浓，但需留意路滑与临时封路，建议关注当日预报。' },
        { season: '过渡季', months: '4 月 / 10–12 月', text: '游客相对较少、气温适中，是避开人流的可选时段，早晚温差仍然较大。' },
      ],
    },
  },
  en: {
    legends: {
      title: 'Legends & Folklore',
      intro:
        'In Andean oral tradition, gorges, mountains and springs are alive with spirit. The stories below belong to local folklore and cultural memory rather than scientific findings, yet they are key cultural clues to understanding this land.',
      items: [
        {
          name: 'The origin of the “Devil’s Throat”',
          text: 'Local storytelling holds that this long, deep gorge is a cleft torn into the mountain by the devil; when the wind passes through the rock walls, its low resonance is described as the devil’s roar — the origin of the name.',
        },
        {
          name: 'Pachamama (Mother Earth)',
          text: 'Pachamama is the Earth Mother revered in Andean belief. Before journeys, planting or building, people often offer a little food, drink or coca leaf in gratitude to the land — a ritual known as corpachada.',
        },
        {
          name: 'Mountain spirits and guardians',
          text: 'Mountains are said to be watched over by guardian spirits (such as Llastay or Coquena) that protect wild vicuñas and llamas; harming or over-hunting these animals was believed to bring the spirits’ punishment.',
        },
        {
          name: 'Tales of hidden “treasure”',
          text: 'Stories of ancient treasure or an “enchanted city” hidden among the rock walls have circulated for generations, reflecting local imagination about pre-Hispanic history and lost civilisations.',
        },
      ],
    },
    geology: {
      title: 'Geology & Climate: How the Gorge Formed',
      intro:
        'The landscape of the Quebrada de Humahuaca was shaped by long geological processes. Understanding them helps you read the layered rock walls and vivid colours before you.',
      items: [
        {
          name: 'Ancient marine sediments',
          text: 'The rock layers flanking the gorge are mostly marine and continental sedimentary rocks hundreds of millions of years old, recording a time when this land lay under the sea and was later uplifted by the Andes.',
        },
        {
          name: 'Uplift and erosion',
          text: 'Andean uplift raised the strata, and river incision plus long-term weathering and erosion gradually carved today’s narrow, steep gorge.',
        },
        {
          name: 'Strata and colour',
          text: 'Different minerals in the layers oxidise into reds, purples, ochres and greys; iron oxides tend to be reddish-brown, so the gorge shows clear colour bands that shift with the light.',
        },
        {
          name: 'Altitude and climate',
          text: 'The gorge core sits at roughly 2,400–2,600 m, with an arid climate, strong sun and a wide day–night temperature range; the rainy season falls in the southern summer (around January–March).',
        },
        {
          name: 'Intense solar radiation',
          text: 'High altitude and dry air make UV unusually strong; use sun protection even when overcast, stay hydrated and acclimatise gradually.',
        },
      ],
    },
    nature: {
      title: 'Flora, Fauna & Ecology',
      intro:
        'In this dry, high-altitude environment, distinctive plant and animal communities have evolved. Please keep your distance, do not feed or pick, and respect their habitat.',
      items: [
        {
          name: 'Characteristic plants',
          text: 'Typical species include tall columnar cacti (cardón), drought-tolerant shrubs (such as tola) and trees used for fuel and building (such as queñoa and churqui), together forming the arid mountain landscape.',
        },
        {
          name: 'Representative animals',
          text: 'The area is home to vicuña, guanaco, domestic llama and the Andean vizcacha, while Andean condors occasionally circle overhead.',
        },
        {
          name: 'Birds and micro-habitats',
          text: 'The gorge and its riverbanks support many highland bird species, and the riverside wetlands are especially valuable in this arid setting.',
        },
        {
          name: 'Cultural and natural value',
          text: 'Because it combines natural scenery with living culture, the Quebrada de Humahuaca was inscribed on the UNESCO World Heritage List in 2003.',
        },
      ],
    },
    glossary: {
      title: 'Glossary',
      intro: 'A quick reference to terms you may see on signs, panels and in local storytelling.',
      terms: [
        { term: 'Pachamama', definition: 'The “Mother Earth” of Andean belief, a symbol of nature and fertility and a key cultural concept here.' },
        { term: 'Pucará', definition: 'A pre-Hispanic defensive settlement or fortress, usually built on high ground; Tilcara has a well-known one.' },
        { term: 'Quebrada', definition: 'Spanish for “gorge / deep valley”; the Quebrada de Humahuaca is the region’s great valley.' },
        { term: 'Apachita', definition: 'A ceremonial stone cairn at Andean passes or trailside, where travellers leave stones or offerings out of respect.' },
        { term: 'Corpachada', definition: 'An offering ritual to Pachamama, expressing gratitude and asking for blessing.' },
        { term: 'Cardón', definition: 'The local name for the columnar cactus, an emblematic plant of the arid mountain landscape.' },
      ],
    },
    seasons: {
      title: 'Best Time to Visit',
      intro: 'Each season offers a different experience; the notes below are general guidance — always check the forecast before you travel.',
      rows: [
        { season: 'Dry season', months: 'May–Sep', text: 'Little rain, many clear days and good visibility — a popular peak season for hiking and photography; nights are cold, so bring warm layers.' },
        { season: 'Rainy season', months: 'Jan–Mar', text: 'Afternoon showers are more likely and the gorge colours are deeper, but watch for slippery trails and temporary closures; check the daily forecast.' },
        { season: 'Shoulder season', months: 'Apr / Oct–Dec', text: 'Fewer visitors and moderate temperatures make this a good window to avoid crowds, though the day–night range stays wide.' },
      ],
    },
  },
  es: {
    legends: {
      title: 'Leyendas y tradición oral',
      intro:
        'En la tradición oral andina, las quebradas, los cerros y las vertientes están vivos y tienen espíritu. Los relatos siguientes pertenecen al folclore y la memoria cultural local más que a la ciencia, pero son claves culturales para entender esta tierra.',
      items: [
        {
          name: 'El origen de la “Garganta del Diablo”',
          text: 'La narrativa local sostiene que esta quebrada larga y profunda es una grieta abierta en el cerro por el diablo; cuando el viento atraviesa las paredes de roca, su resonancia grave se describe como el rugido del diablo, de allí el nombre.',
        },
        {
          name: 'Pachamama (Madre Tierra)',
          text: 'La Pachamama es la Madre Tierra venerada en el mundo andino. Antes de viajar, sembrar o construir, se suele ofrendar algo de comida, bebida u hoja de coca en agradecimiento a la tierra: el ritual de la corpachada.',
        },
        {
          name: 'Espíritus y guardianes del cerro',
          text: 'Se dice que los cerros son custodiados por espíritus protectores (como Llastay o Coquena) que protegen a las vicuñas y llamas silvestres; dañar o cazar en exceso a estos animales atraía su castigo.',
        },
        {
          name: 'Relatos de “tesoros” ocultos',
          text: 'Las historias sobre tesoros antiguos o una “ciudad encantada” escondida entre las rocas circulan desde hace generaciones y reflejan la imaginación local sobre la historia prehispánica y las civilizaciones perdidas.',
        },
      ],
    },
    geology: {
      title: 'Geología y clima: cómo se formó la quebrada',
      intro:
        'El paisaje de la Quebrada de Humahuaca fue modelado por largos procesos geológicos. Entenderlos ayuda a leer las paredes estratificadas y sus colores.',
      items: [
        {
          name: 'Antiguos sedimentos marinos',
          text: 'Las capas de roca a ambos lados de la quebrada son en su mayoría sedimentarias, marinas y continentales, de cientos de millones de años, que registran cuándo esta tierra estuvo bajo el mar y luego fue elevada por los Andes.',
        },
        {
          name: 'Elevación y erosión',
          text: 'El levantamiento andino elevó los estratos y, después, el corte de los ríos junto con la meteorización y la erosión fueron tallando la quebrada estrecha y abrupta actual.',
        },
        {
          name: 'Estratos y color',
          text: 'Distintos minerales de las capas se oxidan en rojos, púrpuras, ocres y grises; los óxidos de hierro tienden al rojo parduzco, por eso la quebrada muestra franjas de color que cambian con la luz.',
        },
        {
          name: 'Altitud y clima',
          text: 'El sector central está a unos 2.400–2.600 m, con clima árido, sol intenso y gran amplitud térmica; la temporada de lluvias cae en el verano austral (aprox. enero–marzo).',
        },
        {
          name: 'Radiación solar intensa',
          text: 'La altura y el aire seco hacen que la radiación UV sea muy fuerte; conviene protegerse incluso con cielo nublado, hidratarse y aclimatarse de a poco.',
        },
      ],
    },
    nature: {
      title: 'Flora, fauna y ecología',
      intro:
        'En este ambiente árido y de altura evolucionaron comunidades de plantas y animales singulares. Mantené distancia, no alimentes ni recolectes, y respetá su hábitat.',
      items: [
        {
          name: 'Vegetación característica',
          text: 'Entre las especies típicas hay cactus columnares altos (cardón), arbustos resistentes a la sequía (como la tola) y árboles usados para leña y construcción (como queñoa y churqui), que forman el paisaje árido de montaña.',
        },
        {
          name: 'Animales representativos',
          text: 'La zona alberga vicuñas, guanacos, llamas domésticas y la vizcacha andina, mientras que a veces sobrevuelan cóndores.',
        },
        {
          name: 'Aves y microhábitats',
          text: 'La quebrada y sus riberas sostienen muchas aves de altura, y los humedales ribereños son especialmente valiosos en un entorno tan árido.',
        },
        {
          name: 'Valor cultural y natural',
          text: 'Por combinar paisaje natural y cultura viva, la Quebrada de Humahuaca fue inscrita en la Lista del Patrimonio Mundial de la UNESCO en 2003.',
        },
      ],
    },
    glossary: {
      title: 'Glosario',
      intro: 'Referencia rápida de términos que pueden aparecer en carteles, paneles y relatos locales.',
      terms: [
        { term: 'Pachamama', definition: 'La “Madre Tierra” del mundo andino, símbolo de la naturaleza y la fertilidad, y concepto cultural clave de la región.' },
        { term: 'Pucará', definition: 'Asentamiento defensivo o fortaleza prehispánica, generalmente en altura; Tilcara tiene uno muy conocido.' },
        { term: 'Quebrada', definition: 'Palabra española para “garganta / valle profundo”; la Quebrada de Humahuaca es el gran valle de la región.' },
        { term: 'Apachita', definition: 'Montículo de piedras ceremonial en los pasos andinos o al borde del camino, donde los viajeros dejan piedras u ofrendas.' },
        { term: 'Corpachada', definition: 'Ritual de ofrenda a la Pachamama para agradecer y pedir bendiciones.' },
        { term: 'Cardón', definition: 'Nombre local del cactus columnar, planta emblemática del paisaje árido de montaña.' },
      ],
    },
    seasons: {
      title: 'Mejor época para visitar',
      intro: 'Cada estación ofrece una experiencia distinta; lo siguiente es una guía general: verificá siempre el pronóstico antes de viajar.',
      rows: [
        { season: 'Temporada seca', months: 'may–sep', text: 'Pocas lluvias, muchos días despejados y buena visibilidad: temporada alta para caminatas y fotografía; las noches son frías, llevá abrigo.' },
        { season: 'Temporada de lluvias', months: 'ene–mar', text: 'Mayor probabilidad de chaparrones por la tarde y colores más intensos, pero atención a senderos resbaladizos y cierres temporales; consultá el pronóstico diario.' },
        { season: 'Temporada intermedia', months: 'abr / oct–dic', text: 'Menos visitantes y temperaturas moderadas para evitar multitudes, aunque la amplitud térmica diaria sigue siendo amplia.' },
      ],
    },
  },
  it: {
    legends: {
      title: 'Leggende e tradizione orale',
      intro:
        'Nella tradizione orale andina, gole, monti e sorgenti sono vivi e dotati di spirito. I racconti seguenti appartengono al folclore e alla memoria culturale locale più che alla scienza, ma sono chiavi culturali per capire questa terra.',
      items: [
        {
          name: 'L’origine della “Gola del Diavolo”',
          text: 'La narrazione locale sostiene che questa gola lunga e profonda sia una fenditura aperta nel monte dal diavolo; quando il vento attraversa le pareti di roccia, la sua risonanza grave viene descritta come il ruggito del diavolo: da qui il nome.',
        },
        {
          name: 'Pachamama (Madre Terra)',
          text: 'La Pachamama è la Madre Terra venerata nel mondo andino. Prima di viaggiare, seminare o costruire si offre spesso un po’ di cibo, bevanda o foglia di coca in ringraziamento alla terra: il rituale della corpachada.',
        },
        {
          name: 'Spiriti e guardiani dei monti',
          text: 'Si dice che i monti siano custoditi da spiriti protettori (come Llastay o Coquena) che proteggono vigogne e lama selvatici; danneggiarli o cacciarli in eccesso attirava il loro castigo.',
        },
        {
          name: 'Racconti di “tesori” nascosti',
          text: 'Le storie di antichi tesori o di una “città incantata” nascosta tra le rocce circolano da generazioni e riflettono l’immaginario locale sulla storia preispanica e sulle civiltà perdute.',
        },
      ],
    },
    geology: {
      title: 'Geologia e clima: come si è formata la gola',
      intro:
        'Il paesaggio della Quebrada de Humahuaca è stato modellato da lunghi processi geologici. Capirli aiuta a leggere le pareti stratificate e i loro colori.',
      items: [
        {
          name: 'Antichi sedimenti marini',
          text: 'Le rocce ai lati della gola sono in gran parte sedimentarie, marine e continentali, vecchie di centinaia di milioni di anni: registrano quando questa terra era sotto il mare e poi fu sollevata dalle Ande.',
        },
        {
          name: 'Sollevamento ed erosione',
          text: 'Il sollevamento andino innalzò gli strati; poi l’incisione dei fiumi, insieme a degradazione ed erosione, ha scavato l’attuale gola stretta e ripida.',
        },
        {
          name: 'Strati e colore',
          text: 'Minerali diversi negli strati si ossidano in rossi, viola, ocra e grigi; gli ossidi di ferro tendono al rosso-bruno, perciò la gola mostra fasce di colore che cambiano con la luce.',
        },
        {
          name: 'Altitudine e clima',
          text: 'Il settore centrale è a circa 2.400–2.600 m, con clima arido, sole intenso e forti escursioni termiche; la stagione delle piogge cade nell’estate australe (circa gennaio–marzo).',
        },
        {
          name: 'Raggi UV intensi',
          text: 'Quota e aria secca rendono gli UV molto forti: proteggiti anche con cielo coperto, idratati e acclimatati gradualmente.',
        },
      ],
    },
    nature: {
      title: 'Flora, fauna ed ecologia',
      intro:
        'In questo ambiente arido e d’alta quota si sono evolute comunità di piante e animali peculiari. Mantieni la distanza, non nutrire né raccogliere e rispetta il loro habitat.',
      items: [
        {
          name: 'Vegetazione tipica',
          text: 'Tra le specie tipiche ci sono grandi cactus colonnari (cardón), arbusti resistenti alla siccità (come la tola) e alberi usati per legna e costruzioni (come queñoa e churqui), che formano il paesaggio arido di montagna.',
        },
        {
          name: 'Animali rappresentativi',
          text: 'L’area ospita vigogne, guanachi, lama domestici e la vizcacha andina, mentre a volte sorvolano i condor.',
        },
        {
          name: 'Uccelli e micro-habitat',
          text: 'La gola e le sue rive sostengono molte specie di uccelli d’alta quota, e le zone umide ripariali sono particolarmente preziose in un contesto così arido.',
        },
        {
          name: 'Valore culturale e naturale',
          text: 'Per l’unione di paesaggio naturale e cultura viva, la Quebrada de Humahuaca è stata iscritta nella Lista del Patrimonio Mondiale UNESCO nel 2003.',
        },
      ],
    },
    glossary: {
      title: 'Glossario',
      intro: 'Riferimento rapido ai termini che puoi incontrare su cartelli, pannelli e nei racconti locali.',
      terms: [
        { term: 'Pachamama', definition: 'La “Madre Terra” del mondo andino, simbolo di natura e fertilità e concetto culturale chiave della zona.' },
        { term: 'Pucará', definition: 'Insediamento difensivo o fortezza preispanica, di solito in altura; Tilcara ne ha uno molto noto.' },
        { term: 'Quebrada', definition: 'Termine spagnolo per “gola / valle profondo”; la Quebrada de Humahuaca è la grande valle della regione.' },
        { term: 'Apachita', definition: 'Cumulo di pietre cerimoniale ai valichi andini o a bordo sentiero, dove i viaggiatori lasciano pietre o offerte.' },
        { term: 'Corpachada', definition: 'Rituale di offerta alla Pachamama per ringraziare e chiedere benedizioni.' },
        { term: 'Cardón', definition: 'Nome locale del cactus colonnare, pianta emblematica del paesaggio arido di montagna.' },
      ],
    },
    seasons: {
      title: 'Periodo migliore per visitare',
      intro: 'Ogni stagione offre un’esperienza diversa; le note seguenti sono indicazioni generali: controlla sempre le previsioni prima di partire.',
      rows: [
        { season: 'Stagione secca', months: 'mag–set', text: 'Poche piogge, molte giornate serene e buona visibilità: alta stagione per escursioni e fotografia; le notti sono fredde, porta abbigliamento caldo.' },
        { season: 'Stagione delle piogge', months: 'gen–mar', text: 'Più probabili rovesci pomeridiani e colori più intensi, ma attenzione a sentieri scivolosi e chiusure temporanee; controlla le previsioni del giorno.' },
        { season: 'Stagione intermedia', months: 'apr / ott–dic', text: 'Meno visitatori e temperature moderate per evitare la folla, anche se l’escursione termica giornaliera resta ampia.' },
      ],
    },
  },
};
