export type Locale = "zh" | "en" | "es" | "it";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type Translations = {
  nav: { history: string; architecture: string; monuments: string; eco: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; subtitle: string; cta: string; description: { address: string; phone: string; category: string } };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string };
  myths: { title: string; intro: string; items: { title: string; content: string }[] };
  curiosities: { title: string; content: string };
  eco: { title: string; intro: string; items: string[] };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  contrast: { title: string; intro: string; before: string; after: string };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] }; essentials: { icon: string; title: string; text: string }[] };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string; categories: { key: string; label: string }[] };
  reviews: { title: string; subtitle: string; viewMore: string; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  siteMap: { title: string; intro: string; hint: string; cta: string; zones: { key: string; name: string; desc: string }[] };
  itinerary: { title: string; intro: string; steps: { time: string; title: string; text: string }[] };
  ctaBand: { title: string; subtitle: string; buttons: string[] };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

const LINK_DEFS: { url: string; names: Record<Locale, string> }[] = [
  {
    url: "https://turismo.jujuy.gob.ar/",
    names: {
      zh: "胡胡伊省官方旅游局 (Secretaría de Turismo de Jujuy)",
      en: "Secretaría de Turismo de Jujuy — Official Jujuy Tourism",
      es: "Secretaría de Turismo de Jujuy — Turismo Oficial de Jujuy",
      it: "Segretariato del Turismo di Jujuy — Turismo Ufficiale",
    },
  },
  {
    url: "https://www.argentina.travel/",
    names: {
      zh: "阿根廷国家旅游局官方推广门户 (Argentina.travel)",
      en: "Argentina National Tourism Portal (Argentina.travel)",
      es: "Portal Oficial de Turismo de Argentina (Argentina.travel)",
      it: "Portale Ufficiale del Turismo Argentino (Argentina.travel)",
    },
  },
  {
    url: "https://whc.unesco.org/zh/list/1116/",
    names: {
      zh: "联合国教科文组织 (UNESCO) — 乌马瓦卡峡谷世界遗产",
      en: "UNESCO World Heritage — Quebrada de Humahuaca",
      es: "Patrimonio Mundial UNESCO — Quebrada de Humahuaca",
      it: "Patrimonio Mondiale UNESCO — Quebrada de Humahuaca",
    },
  },
  {
    url: "https://larutanatural.gob.ar/",
    names: {
      zh: "阿根廷「自然之路」官方生态旅游计划 (La Ruta Natural)",
      en: "La Ruta Natural — Argentina's Official Ecotourism Program",
      es: "La Ruta Natural — Programa Oficial de Ecoturismo de Argentina",
      it: "La Ruta Natural — Programma Ufficiale di Ecoturismo dell'Argentina",
    },
  },
  {
    url: "https://www.argentina.gob.ar/jujuy",
    names: {
      zh: "阿根廷国家政府官网 — 胡胡伊省政务专页",
      en: "Argentina Government — Jujuy Province Official Page",
      es: "Gobierno de Argentina — Página Oficial de la Provincia de Jujuy",
      it: "Governo dell'Argentina — Pagina Ufficiale della Provincia di Jujuy",
    },
  },
];

const LINKS_BY_LOCALE: Record<Locale, LinkItem[]> = {
  zh: LINK_DEFS.map((d) => ({ name: d.names.zh, url: d.url })),
  en: LINK_DEFS.map((d) => ({ name: d.names.en, url: d.url })),
  es: LINK_DEFS.map((d) => ({ name: d.names.es, url: d.url })),
  it: LINK_DEFS.map((d) => ({ name: d.names.it, url: d.url })),
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { history: "自然奇观", architecture: "地质构造", monuments: "徒步探秘", eco: "生态保护", visiting: "参观信息", transportation: "交通指南", gallery: "照片集锦", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: {
      tags: ["联合国教科文组织世界遗产", "天然峡谷瀑布", "海拔约2,450米"],
      tagline: "阿根廷 · 胡胡伊省 · 蒂尔卡拉",
      title: "Garganta del Diablo",
      subtitle: "魔鬼之喉 · 天然峡谷 · 乌马瓦卡峡谷",
      cta: "探索这座自然奇观",
      description: {
        address: "Paraje Garganta del Diablo, Tilcara, Jujuy, 阿根廷",
        phone: "+54 388 422-1325",
        category: "自然奇观 · 峡谷瀑布"
      }
    },
    rating: { reviews: "条评价", source: "Google 评论" },
    history: {
      title: "大自然的鬼斧神工",
      intro: `Garganta del Diablo（魔鬼之喉）是阿根廷胡胡伊省蒂尔卡拉（Tilcara）附近最令人叹为观止的自然奇观之一。这是一条由湍急水流历经数百万年冲刷而成的狭窄峡谷，瀑布从高处倾泻而下，在赭红色的岩壁间轰鸣回响。\n\n**地质奇迹的诞生**\n魔鬼之喉位于乌马瓦卡峡谷（Quebrada de Humahuaca）的支流区域，海拔约 **2,450 米**。峡谷两侧的岩壁高达数十米，最窄处仅容一人侧身通过。岩石呈现出从深红到橙黄的丰富层叠色彩，记录了数亿年的地质沉积历史。\n\n**水的雕刻艺术**\n峡谷的形成得益于安第斯山脉的抬升与河流的持续侵蚀。夏季融雪与雨季时，水量激增，湍急的激流裹挟着砂石猛烈切割岩层，逐渐雕琢出今天我们所见的深邃裂缝。站在谷底仰望，一线天的壮观景象令人心生敬畏，充分展现了大自然作为最伟大雕刻家的力量。\n\n**世界遗产的一部分**\n2003 年，魔鬼之喉所在的乌马瓦卡峡谷被联合国教科文组织列为**世界文化遗产**。这条绵延 155 公里的峡谷见证了从史前狩猎采集者到印加帝国、再到西班牙殖民时代长达一万年的文化演变。魔鬼之喉作为峡谷中最具视觉冲击力的自然景观之一，吸引着来自世界各地的徒步爱好者和摄影师。`
    },
    myths: {
      title: "峡谷传说与安第斯神话",
      intro: "在安第斯原住民的世界观中，每一处山水都承载着古老的传说。魔鬼之喉的名字本身就蕴含着充满戏剧性的民间故事。",
      items: [
        {
          title: "魔鬼之喉的命名传说",
          content: "关于魔鬼之喉（Garganta del Diablo）这个名字的由来，当地流传着一个动人的传说。\n\n相传在很久以前，一位美丽的原住民少女与外来殖民者的青年相爱。少女的父亲——部落中德高望重的酋长——极力反对这段跨越文化的恋情。在一个风雨交加的夜晚，青年试图带着少女私奔。\n\n酋长发现后震怒不已，向大地之母帕查玛玛（Pachamama）祈求惩罚。大地突然裂开，形成一道深不见底的峡谷。青年坠入谷底，少女伏在悬崖边撕心裂肺地哭喊。据说她的泪水化作了瀑布，而峡谷深处回荡的咆哮声，便是魔鬼在为这段被阻挠的爱情发出怒吼。\n\n另一种说法则更为直接：当洪水季节来临时，峡谷中水流撞击岩壁的轰鸣声如同魔鬼在低吼咆哮，因此得名「魔鬼之喉」。无论哪种说法，这个名字都完美诠释了这座峡谷令人敬畏的原始力量。"
        },
        {
          title: "大地母亲帕查玛玛（Pachamama）的圣地",
          content: "在安第斯信仰中，帕查玛玛（Pachamama）是主宰生育、农业与大地万物的至高母神。每年八月一日，整个胡胡伊省都会举行盛大的帕查玛玛祭典（Ceremonia de la Pachamama）。\n\n魔鬼之喉所在的蒂尔卡拉地区被视为帕查玛玛力量尤为集中的圣地。当地人在进入峡谷徒步前，常常会先在地上倾倒几滴奇恰酒（chicha）或放置几片古柯叶，以表达对大地母亲的敬意，祈求旅途平安。\n\n峡谷中流淌不息的水被视为帕查玛玛的血液——滋养着安第斯高原的一切生命。每年八月，附近的村民还会携带食物和饮品来到峡谷入口处，举行简朴却虔诚的敬地仪式（Corpachada），延续着与大地母亲最质朴的契约。"
        },
        {
          title: "峡谷守护者：科克纳（Coquena）",
          content: "在阿根廷西北部的民间传说中，科克纳（Coquena）是守护野生动物的矮小神灵，尤其庇佑小羊驼（vicuña）和原驼（guanaco）。他穿着传统斗篷，戴着宽边帽，在峡谷最深处无声地游走。\n\n传说在魔鬼之喉的悬崖峭壁间，偶尔可以看到野生原驼的身影。当地人说那是科克纳正在放牧，只有心地纯善的人才能窥见这位守护神的身影。\n\n科克纳会惩罚那些滥杀野生动物的猎人，却会引导善良的牧羊人找到安全的水源和路径。在这片崎岖的峡谷地带，这一传说提醒着每一位造访者：善待这片土地上的生灵，就是善待祖先留下的宝贵遗产。"
        }
      ]
    },
    curiosities: {
      title: "自然趣闻与文化剪影",
      content: `**「魔鬼之喉」的姊妹景点**\n有趣的是，阿根廷境内有多处以「Garganta del Diablo」命名的自然景观。最著名的当属伊瓜苏瀑布（Cataratas del Iguazú）中的魔鬼之喉——那是世界最壮观的瀑布群之一。而蒂尔卡拉附近的这座魔鬼之喉虽然规模较小，但它独特的高海拔峡谷地貌和赭红色岩壁赋予了它完全不同的震撼美学。\n\n**地质调色盘**\n魔鬼之喉两侧的岩壁呈现出从深红、橙黄到紫褐的丰富色彩层次。这些色彩来自不同地质时期沉积的矿物——富含氧化铁的红色岩层、富含锰的紫色岩层、以及碳酸钙形成的浅色条纹，共同构成了一幅大自然用亿万年绘制的「地质油画」。\n\n**峡谷与星空**\n由于远离城市光污染，魔鬼之喉周边区域是绝佳的星空观测地。每年五月至九月（南半球冬季），在清澈干燥的高原夜空中，银河清晰可见。当地旅游机构提供夜间观星徒步活动，让游客在峡谷的静谧中感受宇宙的浩瀚。\n\n**安第斯神鹰的栖息地**\n魔鬼之喉的悬崖峭壁是安第斯神鹰（Cóndor Andino）的重要栖息地之一。这种翼展可达三米的巨鸟是安第斯山脉的象征，在当地原住民文化中被视为连接天地的神圣使者。运气好的游客可以在徒步途中看到它们乘着峡谷上升气流翱翔的壮观场景。`
    },
    eco: {
      title: "生态保护（Conservación Ecológica）",
      intro: "魔鬼之喉作为乌马瓦卡峡谷世界遗产的组成部分，其脆弱的生态环境需要每一位游客的悉心呵护。作为独立的非盈利科普指南，我们倡导以最尊重自然的方式进行探访。",
      items: [
        "**留在步道上**：请沿设立的步道行走，不要擅自开辟新路，防止水土流失",
        "**「无痕探访」**：带走所有垃圾和废弃物，包括果皮和纸巾等可降解物",
        "**不惊扰野生动物**：请勿喂食或接近野生动物，尤其保护当地的安第斯神鹰和原驼",
        "**保护水源**：峡谷中的溪流是下游社区的重要水源，请勿在水中洗涤或丢弃任何物品",
        "**安静探访**：峡谷的声学环境非常独特，请降低音量，让所有人都能听到自然的声音",
        "**不带走自然物**：不要采集岩石、植物或化石，让它们留在属于它们的地方"
      ]
    },
    architecture: {
      title: "地质构造与自然奇观",
      intro: "魔鬼之喉是大自然历经数百万年雕刻而成的杰作。其独特的地质构造不仅具有极高的观赏价值，也为地质学家提供了研究安第斯造山运动的天然实验室。",
      specs: {
        structure: { title: "峡谷构造", content: "魔鬼之喉是一条典型的「狭谷」（Slot Canyon）——深度远大于宽度。峡谷全长约 500 米，最深处约 40 米，而最窄处仅约 1.5 米。阳光从狭窄的裂缝中倾泻而下，在赭红色岩壁上投射出不断变幻的光影，营造出超现实的空间感受。\n\n峡谷底部有一条四季不断的溪流。在雨季（通常为 12 月至次年 3 月），水量激增形成壮观的瀑布；在旱季，水流减缓成清澈见底的小溪，游客可以直接涉水穿行。峡谷两侧的岩壁被水流打磨得异常光滑，呈现出优美的流线型纹理。" },
        design: { title: "岩层与色彩", content: "魔鬼之喉的岩壁露出壮观的沉积岩层剖面，记录了数亿年的地质历史。岩层主要由砂岩、泥岩和砾岩交替沉积而成，形成于古生代至中生代。\n\n最引人注目的是岩壁的色彩变化——从深红色（富含氧化铁）到橙黄色（含铁氢氧化物）、再到紫色（含锰矿物）和灰白色（碳酸钙），仿佛大地被时光染上了层层颜色。这些色彩在清晨和黄昏时分尤为艳丽，是摄影师梦寐以求的拍摄对象。" },
        optics: { title: "水文特征", content: "峡谷中的水流源自安第斯山脉高处的融雪和降雨。水体富含矿物质，尤其在流经红色岩层后呈现出微妙的金属光泽。\n\n瀑布是魔鬼之喉最具标志性的景观之一。在雨水充沛的季节，水流从约 15 米高处倾泻而下，撞击谷底岩石激起漫天水雾，在阳光照射下常可见到绚丽的彩虹横跨峡谷。即使在旱季，涓涓细流沿着光滑的岩壁缓缓滑落，也另有一番静谧之美。" }
      },
      plaque: {
        title: "基本信息",
        items: [
          { label: "名称", value: "Garganta del Diablo（魔鬼之喉）" },
          { label: "位置", value: "蒂尔卡拉镇附近，胡胡伊省，阿根廷" },
          { label: "地质年代", value: "古生代至中生代沉积岩" },
          { label: "海拔高度", value: "约 2,450 米" },
          { label: "峡谷深度", value: "最深处约 40 米" },
          { label: "所属保护区", value: "乌马瓦卡峡谷（UNESCO 2003）" },
          { label: "类型", value: "狭谷 / 瀑布 / 自然奇观" }
        ]
      }
    },
    monuments: {
      title: "在魔鬼之喉可以体验什么",
      intro: "魔鬼之喉将峡谷徒步、瀑布观赏与壮丽的安第斯自然风光完美融合。以下体验深受自然爱好者、摄影师和探险旅行者的喜爱。",
      items: [
        { name: "峡谷徒步穿越", description: "沿着峡谷底部的小径徒步前进，涉水穿行于狭窄的岩壁之间。仰望天空，一线天的壮观景象令人叹为观止。脚下是清澈的溪流，耳畔是潺潺水声与回荡的鸟鸣——这是与大自然最亲密的接触方式。" },
        { name: "瀑布观赏与摄影", description: "在雨季（12月至3月），魔鬼之喉的瀑布最为壮观。水幕从十余米高处轰鸣而下，在谷底激起漫天水雾。彩虹常常横跨瀑布两端，构成摄影师梦寐以求的画面。建议携带防水设备保护相机。" },
        { name: "观鸟与安第斯神鹰", description: "魔鬼之喉的悬崖是安第斯神鹰（Cóndor Andino）的栖息地。这种翼展可达三米的巨鸟利用峡谷的上升热气流翱翔，是安第斯天空的真正王者。带上望远镜，您可能还会看到安第斯火烈鸟和多种蜂鸟。" },
        { name: "峡谷全景远眺", description: "从峡谷入口处的高地远眺，整个乌马瓦卡峡谷的壮丽全景尽收眼底。远处层层叠叠的彩色山峦在阳光下闪耀，近处是魔鬼之喉深邃的裂缝——这一刻，您会真正理解为什么这片土地被列为世界遗产。" }
      ]
    },
    contrast: {
      title: "水与石的永恒对话",
      intro: "魔鬼之喉的魅力在于水与石数百万年的深刻对话。柔水以不懈的坚持雕琢了坚硬的岩石，创造出了令人屏息的奇观。以下两幅画面，让您感受这份自然力量的壮美。",
      before: "激流穿石",
      after: "峡谷远眺"
    },
    visiting: {
      title: "实用参观指南",
      intro: "魔鬼之喉全年对公众开放，建议安排半日行程深入探索。以下信息可帮助您更从容地规划这次自然之旅。",
      hours: { title: "开放时间", content: "每日：**08:00–18:00**\n全年开放（极端天气可能临时关闭）\n建议上午前往，光线条件最佳，且避开午后可能的雷阵雨。", note: "开放时间可能随季节和天气条件调整，建议出发前向当地旅游信息中心确认。" },
      price: { title: "门票信息", content: "需购买门票，具体票价以现场公布为准。阿根廷居民、学生和老年人通常享有优惠。\n门票收入用于步道维护和生态保护。", note: "建议携带现金（阿根廷比索），部分偏远地区可能不支持信用卡支付。" },
      duration: { title: "建议游览时长", content: "峡谷徒步往返 + 拍照：约 **2–3 小时**。\n深度探索 + 观鸟 + 全景拍摄：可安排 **4–5 小时**。", note: "与蒂尔卡拉小镇、七色山（Purmamarca）和乌马瓦卡峡谷串联，可规划 2–3 日西北高原自然之旅。" },
      tips: { title: "游览贴士与注意事项", items: [
        "**高海拔适应**：峡谷海拔约 2,450 米，初到者可能感到轻微不适。建议放慢脚步，多喝水",
        "**防晒必备**：安第斯高原日照极强，请涂抹高倍防晒霜、佩戴太阳镜和宽檐帽",
        "**穿着防水鞋**：峡谷底部需要涉水，建议穿着防水防滑的徒步鞋或凉鞋",
        "**补水充足**：高原气候干燥，建议每人携带至少 1 升饮用水",
        "**防水保护**：瀑布附近水雾较大，建议为相机和手机准备防水袋",
        "**提前查看天气**：雨季（12–3月）可能出现突发洪水，出发前务必查看天气预报"
      ] },
      essentials: [
        { icon: "🫁", title: "高原反应", text: "海拔约 2,450 米，初到者请放慢脚步、多喝水，可咀嚼古柯叶缓解不适。" },
        { icon: "☀️", title: "防晒警告", text: "安第斯高原紫外线极强，必戴墨镜与宽檐帽，涂抹高倍防晒霜。" },
        { icon: "👟", title: "防水鞋履", text: "峡谷底部需涉水，推荐防水防滑徒步鞋，勿穿普通运动鞋。" },
        { icon: "💧", title: "补水充足", text: "高原气候干燥，建议每人携带至少 1 升饮用水。" }
      ]
    },
    transportation: {
      title: "精准交通指南",
      airport: { title: "✈️ 从胡胡伊省首府 / 机场出发", content: "最近的机场是胡胡伊国际机场（Gobernador Horacio Guzmán，代码 JUJ），距蒂尔卡拉约 113 公里。亦可通过萨尔塔机场（SLA）中转，距蒂尔卡拉约 210 公里。", options: [
        { name: "自驾 / 租车（推荐）", price: "约 1.5 小时车程", time: "113 公里", steps: ["从胡胡伊机场沿 9 号国道（RN-9）向北行驶", "沿乌马瓦卡峡谷北上，途经沃尔坎（Volcán）、通巴亚（Tumbaya）等小镇", "到达蒂尔卡拉镇后，按路标指示前往 Garganta del Diablo 入口"] },
        { name: "包车 / 接送（机场或市区出发）", price: "约 1.5–2 小时（直达）", time: "约 113 公里", steps: ["在胡胡伊机场或圣萨尔瓦多德胡胡伊（San Salvador de Jujuy）预约接送服务", "可选择直达蒂尔卡拉镇，或在行程中顺路停靠观景点", "抵达蒂尔卡拉后，再前往 Garganta del Diablo 入口"] },
        { name: "机场出租车 / Remís + 巴士换乘", price: "约 2–3 小时（含换乘）", time: "JUJ → 市区车站 → Tilcara", steps: ["从胡胡伊机场乘出租车或 Remís 前往圣萨尔瓦多德胡胡伊长途车站（Terminal）", "购买前往蒂尔卡拉（Tilcara）的巴士车票", "抵达蒂尔卡拉后，转乘出租车/Remís，或步行前往景区入口"] }
      ]},
      publicTransport: {
        title: "🚌 长途巴士 / 公共交通",
        content: "若不自驾，通常可先抵达蒂尔卡拉镇（Tilcara），再完成最后一段到峡谷入口的接驳。班次与站台可能随季节调整，建议以车站公告为准。",
        options: [
          {
            name: "San Salvador de Jujuy → Tilcara（长途巴士）",
            description: "从胡胡伊省首府出发的常规线路，是公共交通最常用的方式之一。",
            steps: ["前往圣萨尔瓦多德胡胡伊长途车站（Terminal de Ómnibus）", "购买前往蒂尔卡拉（Tilcara）的车票（班次以车站为准）", "抵达蒂尔卡拉后，转乘出租车/Remís 或步行前往 Garganta del Diablo 入口"]
          },
          {
            name: "Salta → Tilcara（长途巴士）",
            description: "适合从萨尔塔入境/中转的路线，沿途可结合 Quebrada de las Conchas 等景观规划行程。",
            steps: ["前往萨尔塔长途车站（Terminal de Salta）", "购买直达或经停蒂尔卡拉的车票（以车站为准）", "抵达蒂尔卡拉后，完成最后 5 公里到景区入口的接驳"]
          },
          {
            name: "蒂尔卡拉 → 景区入口（最后一段）",
            description: "景区入口距镇中心约 5 公里，路况以土路为主，晴天尘土较大。",
            steps: ["从蒂尔卡拉镇中心打车或联系 Remís 前往入口停车场", "体力充沛者可选择步行（约 1 小时）或骑行前往", "到达入口后按指示进入步道"]
          }
        ]
      },
      city: { title: "🏘️ 从蒂尔卡拉镇出发", content: "魔鬼之喉位于蒂尔卡拉镇外约 5 公里处。可选择步行（约 1 小时）、骑自行车或搭乘当地出租车前往。部分旅行社还提供四驱越野车导览服务。", steps: ["从蒂尔卡拉主广场沿指示牌方向出发", "沿土路前行约 5 公里", "到达 Garganta del Diablo 停车场和步道入口"] },
      tips: { title: "交通与高海拔小贴士", items: [
        "**海拔**：蒂尔卡拉镇海拔约 2,450 米，抵达后建议先适应半天再前往峡谷徒步",
        "胡胡伊省首都圣萨尔瓦多德胡胡伊（San Salvador de Jujuy）距蒂尔卡拉约 85 公里，车程约 1 小时",
        "9 号国道（RN-9）路况良好，沿途景色壮美，是阿根廷最著名的自驾路线之一",
        "从萨尔塔市（Salta）出发有直达蒂尔卡拉的长途巴士，车程约 3.5–4 小时",
        "可结合普尔马马卡（Purmamarca）七色山、乌马瓦卡（Humahuaca）和伊鲁亚（Iruya）规划多日行程"
      ] }
    },
    gallery: { title: "照片集锦", viewMore: "在 Google Maps 查看更多照片", categories: [ { key: "gorge", label: "峡谷风光" }, { key: "waterfall", label: "瀑布激流" }, { key: "rock", label: "岩层纹理" }, { key: "panorama", label: "全景远眺" } ] },
    reviews: {
      title: "游客评价与周边探索",
      subtitle: "来自魔鬼之喉的真实声音：Google Maps 游客评价",
      viewMore: "在 Google Maps 查看更多评价",
      nearbyTitle: "周边值得一游的景点",
      nearbyIntro: "探索完魔鬼之喉后，您可顺道造访以下邻近目的地：",
      nearbyItems: [
        { name: "七色山（Cerro de los Siete Colores）", description: "位于普尔马马卡（Purmamarca）小镇，距蒂尔卡拉约 25 公里。这座山以其红、橙、黄、绿、紫等层叠色彩闻名于世，是阿根廷西北部最经典的摄影胜地。" },
        { name: "蒂尔卡拉古堡（Pucará de Tilcara）", description: "位于蒂尔卡拉镇的前印加时期考古遗址，海拔约 2,465 米。这座千年石砌堡垒俯瞰着乌马瓦卡峡谷，是了解安第斯原住民文化的绝佳去处。" },
        { name: "大盐滩（Salinas Grandes）", description: "位于胡胡伊省与萨尔塔省交界处的巨型盐沼，海拔约 3,450 米。纯白无垠的盐壳与钴蓝色天空形成超现实景观，是西北高原最令人震撼的自然奇观之一。" }
      ]
    },
    faq: { title: "常见问题", subtitle: "深入了解魔鬼之喉", items: [
      { question: "魔鬼之喉（Garganta del Diablo）名字的由来是什么？", answer: "「Garganta del Diablo」在西班牙语中意为「魔鬼的喉咙」。这个名字源于峡谷独特的地貌——狭窄深邃的裂缝犹如巨大的喉咙，当洪水季节激流涌入时，水声在峡谷中回荡轰鸣，如同魔鬼在咆哮。此外，当地民间传说讲述了一段跨越文化的爱情悲剧，也为这个名字增添了浪漫而神秘的色彩。" },
      { question: "游览魔鬼之喉需要多少时间？", answer: "峡谷徒步往返约需 2–3 小时（含拍照和观景时间）。如果您计划深度探索、观鸟或进行摄影创作，建议预留 4–5 小时。开放时间为每日 08:00–18:00，建议上午前往以获得最佳光线条件。" },
      { question: "游览魔鬼之喉需要注意什么？", answer: "海拔约 2,450 米，请注意高海拔适应。高原日照极强，务必做好防晒。峡谷底部需要涉水，建议穿着防水防滑的徒步鞋。携带足够饮用水（至少 1 升/人）。雨季（12–3月）可能出现突发洪水，出发前务必查看天气预报。请带走所有垃圾，保护这片脆弱的生态环境。" },
      { question: "如何从布宜诺斯艾利斯到达魔鬼之喉？", answer: "建议先乘飞机从布宜诺斯艾利斯飞往胡胡伊国际机场（JUJ，约 2 小时），再驾车或乘巴士沿 9 号国道向北行驶约 113 公里（1.5 小时）到达蒂尔卡拉。魔鬼之喉位于蒂尔卡拉镇外约 5 公里处，可搭乘出租车、骑自行车或徒步前往。也可选择飞往萨尔塔（SLA），再乘车约 210 公里（3.5–4 小时）。" },
      { question: "魔鬼之喉和伊瓜苏的魔鬼之喉是同一个吗？", answer: "不是。阿根廷有两个名为「Garganta del Diablo」的著名景点：一个是伊瓜苏瀑布群中最大最壮观的瀑布（位于阿根廷东北部与巴西交界处），另一个是蒂尔卡拉附近的这座高海拔峡谷（位于阿根廷西北部胡胡伊省）。两者同为自然奇观，但地貌类型完全不同——前者是低海拔热带瀑布，后者是高海拔干旱区的狭缝型峡谷。" }
    ]},
    location: { title: "地图位置", address: "Paraje Garganta del Diablo\nTilcara, Jujuy Province\nArgentina\n阿根廷胡胡伊省蒂尔卡拉\n魔鬼之喉自然景区", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "魔鬼之喉是乌马瓦卡峡谷世界遗产中的自然瑰宝，是大自然历经数百万年塑造成的奇观。请与我们一同守护这片脆弱的峡谷生态，让水与石的永恒对话永远延续。", text: "© 2026 魔鬼之喉指南 · 保留所有权利。\n本网站是一个独立的第三方非盈利科普指南项目，致力于准确传播 Garganta del Diablo 的信息。我们与阿根廷政府或任何官方机构均无隶属关系。", made: "本网站是一个独立的非盈利科普项目，为自然探索者、徒步爱好者和文化旅行者而建。", linksTitle: "友情链接", links: LINKS_BY_LOCALE.zh },
    siteMap: {
      title: "峡谷游览路线图",
      intro: "将鼠标悬停（或点按）下方地图中的标记，即可探索魔鬼之喉及周边的核心游览区域。",
      hint: "悬停查看 · 点击锁定",
      cta: "查看完整游览地图",
      zones: [
        { key: "entrada", name: "步道入口（Entrada del Sendero）", desc: "峡谷徒步的起点，设有停车场、信息指示牌和简易洗手间。建议在此做好最后的行前准备。" },
        { key: "iglesia", name: "第一观景台（Mirador 1）", desc: "步道第一个主要观景点，可从高处俯瞰峡谷全貌。这里是拍摄峡谷全景的最佳位置之一。" },
        { key: "monumento", name: "瀑布区（Zona de la Cascada）", desc: "魔鬼之喉的标志性瀑布所在地。雨季水量充沛时最为壮观，常可见到彩虹横跨峡谷。" },
        { key: "corrales", name: "狭缝穿行段（Paso Estrecho）", desc: "峡谷最狭窄处，两侧岩壁几乎贴合。阳光从裂缝中射入形成绝美的光束效果。" },
        { key: "necrópolis", name: "峡谷尽头（Final del Cañón）", desc: "徒步路线的终点，峡谷在此豁然开阔。在此可远眺乌马瓦卡峡谷的壮丽全景。" }
      ]
    },
    itinerary: {
      title: "建议行程规划",
      intro: "半日即可深度体验魔鬼之喉。以下时间轴供您参考，可按体力与天气自由调整。",
      steps: [
        { time: "08:00", title: "抵达步道入口", text: "趁上午光线最佳时段到达，做好防晒和补水准备，开始徒步之旅。" },
        { time: "08:30", title: "第一观景台", text: "登临高处俯瞰魔鬼之喉全貌，拍摄峡谷全景照片。晨光下的红色岩壁尤为壮观。" },
        { time: "09:30", title: "瀑布区域", text: "深入峡谷底部，近距离感受瀑布的磅礴气势。水雾中常常能见到绚丽的彩虹。" },
        { time: "10:30", title: "峡缝穿行", text: "进入峡谷最狭窄段落，体验两侧岩壁贴近的压迫感与一线天的奇观。" },
        { time: "12:00", title: "返回蒂尔卡拉", text: "返回镇上享用西北高原风味午餐，为半日自然之旅画上完美句点。" }
      ]
    },
    ctaBand: {
      title: "计划您的魔鬼之喉之旅",
      subtitle: "从徒步准备到周边探索，让峡谷之行从容而深入。",
      buttons: ["开放时间与门票", "徒步安全指南", "在地图查看位置"]
    }
  },
  en: {
    nav: { history: "Natural Wonder", architecture: "Geology", monuments: "Hiking & Explore", eco: "Conservation", visiting: "Visit Info", transportation: "Getting There", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: {
      tags: ["UNESCO World Heritage", "Natural Gorge & Waterfall", "Altitude ~2,450m"],
      tagline: "Argentina · Jujuy Province · Tilcara",
      title: "Garganta del Diablo",
      subtitle: "Devil's Throat · Natural Gorge · Quebrada de Humahuaca",
      cta: "Explore This Natural Wonder",
      description: {
        address: "Paraje Garganta del Diablo, Tilcara, Jujuy, Argentina",
        phone: "+54 388 422-1325",
        category: "Natural Wonder · Gorge & Waterfall"
      }
    },
    rating: { reviews: "reviews", source: "Google Reviews" },
    history: {
      title: "Nature's Masterpiece",
      intro: `Garganta del Diablo (Devil's Throat) is one of the most breathtaking natural wonders near Tilcara in Argentina's Jujuy Province. It is a narrow gorge carved by rushing water over millions of years, where waterfalls plunge into the depths and echo between rust-red rock walls.\n\n**Birth of a Geological Marvel**\nGarganta del Diablo lies within a tributary of the Quebrada de Humahuaca at an altitude of roughly **2,450 metres**. The gorge walls rise several dozen metres high, narrowing in places to barely a metre and a half wide. The rock displays layered bands of deep red, orange and ochre — a record of hundreds of millions of years of geological deposition.\n\n**Water as Sculptor**\nThe gorge was formed by the uplift of the Andes combined with relentless river erosion. During the summer melt and rainy season, water volumes surge dramatically, and fast-flowing torrents laden with grit and stone cut aggressively into the bedrock — slowly carving the deep crevice we see today. Standing on the gorge floor and gazing up at the sliver of sky above is a humbling experience that reveals nature as the greatest sculptor of all.\n\n**Part of a UNESCO World Heritage Site**\nIn **2003** the Quebrada de Humahuaca — home to Garganta del Diablo — was inscribed as a **UNESCO World Heritage Site**. This 155 km-long valley bears witness to 10,000 years of cultural evolution, from prehistoric hunter-gatherers through the Inca Empire to the Spanish colonial era. Garganta del Diablo, as one of the gorge's most visually dramatic natural features, draws hikers and photographers from around the globe.`
    },
    myths: {
      title: "Gorge Legends & Andean Myths",
      intro: "In the Andean worldview, every landscape feature carries an ancient story. The name 'Devil's Throat' itself is wrapped in dramatic folklore.",
      items: [
        {
          title: "The Legend Behind the Name",
          content: "A poignant local legend explains how Garganta del Diablo (Devil's Throat) got its name.\n\nLong ago, a beautiful indigenous maiden fell in love with a young man from the colonial settlers. Her father — the respected chief of the tribe — fiercely opposed the cross-cultural romance. On a stormy night, the young man tried to elope with the maiden.\n\nEnraged, the chief prayed to Pachamama (Mother Earth) for punishment. The earth suddenly split open, creating a bottomless gorge. The young man fell into the abyss, and the maiden lay weeping at the cliff's edge. It is said her tears became the waterfall, and the roar echoing through the gorge is the devil himself howling at the thwarted love.\n\nAnother, more straightforward version holds that during the flood season the thunder of water crashing against the rock walls sounds exactly like a devil's roar — hence the name 'Devil's Throat'. Whichever telling you prefer, the name perfectly captures the raw, awe-inspiring power of this natural wonder."
        },
        {
          title: "Pachamama's Sacred Ground",
          content: "In the Andean belief system, Pachamama is the supreme mother goddess who presides over fertility, agriculture and all earthly life. Every 1 August, the entire province of Jujuy celebrates the Pachamama ceremony.\n\nThe Tilcara area around Garganta del Diablo is considered a place where Pachamama's power is especially strong. Before setting out on a gorge hike, local people often pour a few drops of chicha (maize beer) onto the ground or place coca leaves as an offering to Mother Earth, asking for a safe journey.\n\nThe water that flows endlessly through the gorge is seen as Pachamama's lifeblood — sustaining all life on the Andean high plateau. Every August, villagers bring food and drink to the gorge entrance to perform the simple yet reverent Corpachada (offering to the earth), keeping the most ancient pact with Mother Earth alive."
        },
        {
          title: "Coquena: Guardian of the Gorge",
          content: "In the folklore of north-western Argentina, Coquena is a small, elf-like spirit who protects wild animals, especially vicuñas and guanacos. He wears a traditional poncho and a wide-brimmed hat, wandering silently through the deepest reaches of the canyon.\n\nOn the cliffs around Garganta del Diablo you may occasionally spot wild guanacos. Locals say Coquena is herding them, and only those with a pure heart can catch a glimpse of the guardian spirit.\n\nCoquena punishes hunters who kill animals recklessly, yet guides kind-hearted shepherds to safe water and paths. In this rugged gorge country, the legend reminds every visitor: treat the creatures of this land with kindness, and you honour the precious legacy of the ancestors."
        }
      ]
    },
    curiosities: {
      title: "Natural Trivia & Cultural Vignettes",
      content: `**Garganta del Diablo's Sister Sites**\nInterestingly, Argentina has more than one natural feature named 'Garganta del Diablo'. The most famous is undoubtedly the Devil's Throat at Iguazú Falls (Cataratas del Iguazú) — one of the world's most spectacular waterfall systems. While the Tilcara Garganta del Diablo is considerably smaller in scale, its high-altitude slot-canyon setting and rust-coloured rock walls give it a completely different and equally mesmerising aesthetic.\n\n**A Geological Painter's Palette**\nThe rock walls of Garganta del Diablo display a stunning range of colours — from deep red and burnt orange to violet-brown and pale grey. These hues come from minerals deposited during different geological periods: iron-oxide-rich red layers, manganese-tinted purple bands, and pale calcium-carbonate streaks, together forming a 'geological oil painting' millions of years in the making.\n\n**The Gorge Under the Stars**\nFar from urban light pollution, the area around Garganta del Diablo offers superb stargazing. From May to September (the Southern Hemisphere winter), the Milky Way is vividly visible in the clear, dry high-altitude night sky. Local tour operators offer night-time stargazing hikes, letting visitors contemplate the immensity of the cosmos in the gorge's profound silence.\n\n**Home of the Andean Condor**\nThe cliffs of Garganta del Diablo are an important habitat for the Andean condor (Cóndor Andino). With a wingspan reaching three metres, this majestic bird is a symbol of the Andes and is regarded by indigenous cultures as a sacred messenger between heaven and earth. Lucky visitors may spot them riding the gorge's thermal updrafts — an unforgettable sight.`
    },
    eco: {
      title: "Ecological Conservation",
      intro: "As part of the Quebrada de Humahuaca World Heritage Site, Garganta del Diablo's fragile ecosystem deserves the care of every visitor. As an independent non-profit educational guide, we encourage the most respectful approach to exploring this natural wonder.",
      items: [
        "**Stay on the trail**: follow established paths — do not create new ones, as this causes soil erosion",
        "**Leave no trace**: take all rubbish and waste with you, including biodegradable items like fruit peels and tissues",
        "**Do not disturb wildlife**: do not feed or approach wild animals; especially protect the Andean condor and guanaco",
        "**Protect the water**: the stream in the gorge is a vital water source for downstream communities — do not wash or discard anything in it",
        "**Quiet exploration**: the gorge has a unique acoustic environment — keep noise levels low so everyone can hear nature's sounds",
        "**Take nothing but photos**: do not collect rocks, plants or fossils — leave them where they belong"
      ]
    },
    architecture: {
      title: "Geological Formation & Natural Wonder",
      intro: "Garganta del Diablo is a masterpiece sculpted by nature over millions of years. Its unique geological structure not only offers spectacular views but also provides a natural laboratory for studying Andean orogeny.",
      specs: {
        structure: { title: "Gorge Structure", content: "Garganta del Diablo is a classic slot canyon — far deeper than it is wide. The gorge extends roughly 500 metres in length, reaches depths of about 40 metres, and narrows to as little as 1.5 metres at its tightest point. Sunlight pours through the narrow crack overhead, casting ever-changing patterns of light and shadow on the rust-red rock walls and creating an almost surreal spatial experience.\n\nA perennial stream runs along the gorge floor. During the rainy season (typically December to March), the water surges dramatically, forming powerful waterfalls; in the dry season it slows to a crystal-clear brook that visitors can wade through. The walls have been polished glass-smooth by millennia of flowing water, displaying beautiful streamlined textures." },
        design: { title: "Rock Layers & Colours", content: "The walls of Garganta del Diablo expose a magnificent cross-section of sedimentary strata, chronicling hundreds of millions of years of geological history. The rock is predominantly alternating layers of sandstone, mudstone and conglomerate, deposited from the Palaeozoic to the Mesozoic eras.\n\nThe most striking feature is the colour variation — from deep red (rich in iron oxide) through orange-gold (iron hydroxides) to violet (manganese minerals) and pale grey (calcium carbonate) — as if the earth itself has been dyed in layers by time. These colours are most vivid at sunrise and sunset, making the gorge a dream subject for photographers." },
        optics: { title: "Hydrological Features", content: "The water flowing through the gorge originates from snowmelt and rainfall high in the Andes. It is rich in minerals and takes on a subtle metallic sheen, especially after passing through the red rock strata.\n\nThe waterfall is one of Garganta del Diablo's most iconic features. During the wet season, water plunges from a height of about 15 metres, crashing onto the rocks below and filling the gorge with mist — rainbows often arch across the canyon in the sunlight. Even during the dry season, the sight of thin rivulets sliding slowly down the polished rock walls has a quiet, meditative beauty all its own." }
      },
      plaque: {
        title: "Key Facts",
        items: [
          { label: "Name", value: "Garganta del Diablo (Devil's Throat)" },
          { label: "Location", value: "Near Tilcara, Jujuy Province, Argentina" },
          { label: "Geological Age", value: "Palaeozoic–Mesozoic sedimentary rock" },
          { label: "Altitude", value: "approx. 2,450 m" },
          { label: "Gorge Depth", value: "up to 40 m" },
          { label: "Protected Area", value: "Quebrada de Humahuaca (UNESCO 2003)" },
          { label: "Type", value: "Slot Canyon / Waterfall / Natural Wonder" }
        ]
      }
    },
    monuments: {
      title: "What to Experience at Garganta del Diablo",
      intro: "Garganta del Diablo blends gorge hiking, waterfall viewing and breathtaking Andean scenery. The experiences below are beloved by nature enthusiasts, photographers and adventure travellers alike.",
      items: [
        { name: "Gorge Hike & Wade", description: "Follow the trail along the gorge floor, wading through the stream as the rock walls close in around you. Gaze up at the ribbon of sky above — the slot-canyon effect is truly awe-inspiring. The sound of rushing water, birdsong echoing off the walls and the cool spray on your face make this the most intimate way to connect with nature." },
        { name: "Waterfall Watching & Photography", description: "During the rainy season (December–March), Garganta del Diablo's waterfall is at its most powerful. A curtain of water thunders down from over ten metres, filling the gorge with mist. Rainbows frequently arch across the waterfall — a photographer's dream. Bring waterproof protection for your camera gear." },
        { name: "Birdwatching & Andean Condors", description: "The cliffs of Garganta del Diablo are home to the Andean condor, whose three-metre wingspan makes it the true king of the Andean skies. Bring binoculars and you may also spot Andean flamingos and numerous hummingbird species riding the gorge's thermal currents." },
        { name: "Panoramic Canyon Views", description: "From the high ground at the gorge entrance, the entire Quebrada de Humahuaca unfolds in breathtaking panorama. Layer upon layer of multicoloured mountains shimmer in the sunlight, while the dark crevice of Garganta del Diablo cuts through the foreground — at moments like this, you truly understand why this landscape is a UNESCO World Heritage Site." }
      ]
    },
    contrast: {
      title: "The Eternal Dance of Water & Stone",
      intro: "The magic of Garganta del Diablo lies in the profound dialogue between water and stone over millions of years. Soft water, with relentless persistence, has carved hard rock into a sight that takes the breath away. Two views below capture the majesty of this natural force.",
      before: "Torrent Through Stone",
      after: "Gorge Panorama"
    },
    visiting: {
      title: "Plan Your Visit",
      intro: "Garganta del Diablo is open to the public year-round. A half-day visit is recommended to explore it properly. The following information helps you plan with ease.",
      hours: { title: "Opening Hours", content: "Daily: **08:00–18:00**\nOpen year-round (may close in extreme weather)\nMorning visits are recommended for the best light and to avoid possible afternoon thunderstorms.", note: "Hours may vary by season and weather conditions; check with the local tourist information centre before visiting." },
      price: { title: "Entrance Fee", content: "An entrance fee applies; the exact price is displayed on site. Argentine residents, students and seniors usually receive discounts.\nTicket revenue funds trail maintenance and ecological conservation.", note: "Carry cash (Argentine pesos), as card payments may not be accepted in remote areas." },
      duration: { title: "Suggested Duration", content: "Gorge hike round-trip + photography: about **2–3 hours**.\nIn-depth exploration + birdwatching + panoramic shots: allow **4–5 hours**.", note: "Combine with Tilcara town, the Hill of Seven Colours (Purmamarca) and the Humahuaca Gorge for a 2–3 day north-western highlands nature journey." },
      tips: { title: "Travel Tips & Notes", items: [
        "**Altitude acclimatisation**: the gorge is at ~2,450m. Take it slowly and drink plenty of water",
        "**Sun protection is essential**: the Andean sun is fierce at altitude — use high-SPF sunscreen, sunglasses and a wide-brimmed hat",
        "**Wear waterproof shoes**: you will need to wade through the stream — waterproof, non-slip hiking shoes or sandals are essential",
        "**Stay hydrated**: the highland climate is very dry; carry at least 1 litre of water per person",
        "**Waterproof your gear**: spray from the waterfall can be heavy — bring waterproof bags for cameras and phones",
        "**Check the weather**: flash floods can occur during the rainy season (Dec–Mar); always check the forecast before heading out"
      ] },
      essentials: [
        { icon: "🫁", title: "Altitude", text: "At ~2,450m, take it slowly on arrival, drink plenty of water, and chew coca leaves to ease symptoms." },
        { icon: "☀️", title: "Sun Protection", text: "The Andean sun is extreme — wear sunglasses, a wide-brimmed hat and high-SPF sunscreen." },
        { icon: "👟", title: "Waterproof Footwear", text: "You will wade through the gorge stream — sturdy waterproof hiking shoes are a must." },
        { icon: "💧", title: "Hydration", text: "The highland air is very dry; carry at least 1 litre of water per person." }
      ]
    },
    transportation: {
      title: "Getting There",
      airport: { title: "✈️ From Jujuy Capital / Airport", content: "The nearest airport is Gobernador Horacio Guzmán International Airport (JUJ), about 113 km from Tilcara. Salta Airport (SLA) is an alternative, about 210 km away.", options: [
        { name: "Self-drive / Rental Car (Recommended)", price: "approx. 1.5 hrs", time: "113 km", steps: ["From Jujuy Airport, take National Route 9 (RN-9) northbound", "Drive through the Quebrada de Humahuaca, passing Volcán, Tumbaya and other villages", "Arrive in Tilcara and follow signs to the Garganta del Diablo trailhead"] },
        { name: "Private transfer (airport or city pick-up)", price: "approx. 1.5–2 hrs", time: "≈113 km", steps: ["Book a transfer from JUJ airport or San Salvador de Jujuy", "Travel directly to Tilcara (optionally with scenic stops)", "From Tilcara, continue to the trailhead"] },
        { name: "Taxi/Remís + bus connection", price: "approx. 2–3 hrs (with transfer)", time: "JUJ → terminal → Tilcara", steps: ["Take a taxi or Remís from JUJ to the bus terminal in San Salvador de Jujuy", "Buy a ticket to Tilcara (schedules vary)", "From Tilcara, take a taxi/Remís or walk to the trailhead"] }
      ]},
      publicTransport: {
        title: "🚌 Long-distance buses / Public transport",
        content: "If you are not driving, the usual approach is to reach Tilcara first and then complete the last 5 km to the trailhead. Timetables may change seasonally — check the terminal boards.",
        options: [
          {
            name: "San Salvador de Jujuy → Tilcara (bus)",
            description: "A regular line from the provincial capital to Tilcara.",
            steps: ["Go to the bus terminal in San Salvador de Jujuy", "Buy a ticket to Tilcara (subject to availability)", "From Tilcara, take a taxi/Remís or walk to the trailhead"]
          },
          {
            name: "Salta → Tilcara (bus)",
            description: "Useful if you are arriving via Salta or combining routes in the north-west.",
            steps: ["Go to the bus terminal in Salta", "Buy a ticket to Tilcara (direct or with stops, depending on the day)", "From Tilcara, continue the last segment to the trailhead"]
          },
          {
            name: "Tilcara → trailhead (last segment)",
            description: "The trailhead is about 5 km from town; the road is mostly unpaved.",
            steps: ["Use a local taxi/Remís to the car park and entrance", "Alternatively, walk (≈1 hour) or cycle if conditions allow", "Enter the trail following on-site signage"]
          }
        ]
      },
      city: { title: "🏘️ From Tilcara Town", content: "Garganta del Diablo is about 5 km outside Tilcara. You can walk (approx. 1 hour), cycle, or take a local taxi. Some tour operators also offer 4x4 guided excursions.", steps: ["From Tilcara's main square, follow signs towards Garganta del Diablo", "Follow the dirt road for about 5 km", "Arrive at the car park and trailhead"] },
      tips: { title: "Transport & Altitude Tips", items: [
        "**Altitude**: Tilcara sits at ~2,450m — allow half a day to acclimatise before hiking the gorge",
        "San Salvador de Jujuy is ~85 km from Tilcara (≈1 hour by car)",
        "National Route 9 (RN-9) is in good condition and the scenery is spectacular — one of Argentina's most scenic drives",
        "Direct long-distance buses run from Salta city to Tilcara (approx. 3.5–4 hours)",
        "Combine with Purmamarca (Hill of Seven Colours), Humahuaca and Iruya for a multi-day itinerary"
      ] }
    },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps", categories: [ { key: "gorge", label: "Gorge Views" }, { key: "waterfall", label: "Waterfalls" }, { key: "rock", label: "Rock Textures" }, { key: "panorama", label: "Panoramas" } ] },
    reviews: {
      title: "Visitor Reviews & Nearby Exploration",
      subtitle: "Voices from Garganta del Diablo: Real Google Maps Testimonies",
      viewMore: "View More Reviews on Google Maps",
      nearbyTitle: "Nearby Attractions Worth Visiting",
      nearbyIntro: "After exploring Garganta del Diablo, you can easily visit the following nearby destinations:",
      nearbyItems: [
        { name: "Hill of Seven Colours (Cerro de los Siete Colores)", description: "Located in Purmamarca, about 25 km from Tilcara. Famous for its layered bands of red, orange, yellow, green and purple — one of north-west Argentina's most iconic photo spots." },
        { name: "Pucará de Tilcara (Pre-Inca Fortress)", description: "A pre-Inca archaeological site in Tilcara at about 2,465 m altitude. This thousand-year-old stone fortress overlooks the Quebrada de Humahuaca and is a superb place to learn about Andean indigenous culture." },
        { name: "Salinas Grandes (Great Salt Flats)", description: "A vast salt pan on the border of Jujuy and Salta provinces, at about 3,450 m altitude. The blinding white crust against a cobalt-blue sky creates a surreal landscape — one of the most breathtaking natural wonders of the Andean highlands." }
      ]
    },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Garganta del Diablo", items: [
      { question: "What does 'Garganta del Diablo' mean?", answer: "'Garganta del Diablo' is Spanish for 'Devil's Throat'. The name comes from the gorge's unique shape — a narrow, deep crevice resembling a giant throat — and from the thundering roar of floodwaters echoing through the canyon, which locals liken to a devil's roar. Local folklore also recounts a tragic cross-cultural love story that adds romantic and mysterious overtones to the name." },
      { question: "How long does a visit to Garganta del Diablo take?", answer: "The gorge hike round-trip takes about 2–3 hours (including photo stops and viewpoints). If you plan to explore in depth, go birdwatching or do photography, allow 4–5 hours. Opening hours are daily 08:00–18:00; morning visits offer the best light conditions." },
      { question: "What should I keep in mind when visiting?", answer: "The gorge is at ~2,450m; take time to acclimatise. The Andean sun is extreme — use good sun protection. You will need to wade through the stream, so wear waterproof, non-slip hiking shoes. Carry at least 1 litre of water per person. Flash floods can occur during the rainy season (Dec–Mar) — always check the weather forecast. Take all rubbish with you and help protect this fragile ecosystem." },
      { question: "How do I get to Garganta del Diablo from Buenos Aires?", answer: "Fly from Buenos Aires to Jujuy International Airport (JUJ, ≈2 hrs), then drive or take a bus north along National Route 9 for about 113 km (1.5 hrs) to Tilcara. Garganta del Diablo is about 5 km outside Tilcara — you can take a taxi, cycle or walk. Alternatively, fly to Salta (SLA) and travel about 210 km (3.5–4 hrs)." },
      { question: "Is this the same Garganta del Diablo as the one at Iguazú Falls?", answer: "No, they are different places. Argentina has two famous natural features named 'Garganta del Diablo': the massive waterfall at Iguazú Falls (on the border with Brazil in north-east Argentina), and this high-altitude slot canyon near Tilcara (in north-west Argentina's Jujuy Province). Both are natural wonders, but they are completely different in type — one is a low-altitude tropical waterfall and the other a high-altitude arid-region slot canyon." }
    ]},
    location: { title: "Map Location", address: "Paraje Garganta del Diablo\nTilcara, Jujuy Province\nArgentina", openMaps: "View on Google Maps" },
    footer: { callToAction: "Garganta del Diablo is a natural treasure of the Quebrada de Humahuaca World Heritage Site — a wonder sculpted by nature over millions of years. Please join us in protecting this fragile gorge ecosystem so that the eternal dialogue between water and stone may continue for generations to come.", text: "© 2026 Garganta del Diablo Guide · All rights reserved.\nThis website is an independent third-party non-profit educational guide dedicated to sharing accurate information about Garganta del Diablo. We are not affiliated with the Argentine government or any official authority.", made: "This is an independent non-profit educational project, made for nature explorers, hikers and cultural travellers.", linksTitle: "Friendly Links", links: LINKS_BY_LOCALE.en },
    siteMap: {
      title: "Gorge Trail Map",
      intro: "Hover over (or tap) the markers on the map below to explore the key areas of Garganta del Diablo and its surroundings.",
      hint: "Hover to preview · Tap to pin",
      cta: "View the full trail map",
      zones: [
        { key: "entrada", name: "Trailhead (Entrada del Sendero)", desc: "The starting point of the gorge hike, with a car park, information boards and basic restrooms. Make your final preparations here." },
        { key: "iglesia", name: "Viewpoint 1 (Mirador 1)", desc: "The first major viewpoint on the trail, offering elevated views of the entire gorge. One of the best spots for panoramic photography." },
        { key: "monumento", name: "Waterfall Zone (Zona de la Cascada)", desc: "Home to Garganta del Diablo's iconic waterfall. Most spectacular during the rainy season, with rainbows frequently arching across the gorge." },
        { key: "corrales", name: "Slot Passage (Paso Estrecho)", desc: "The narrowest section of the gorge, where the walls almost touch. Sunbeams pierce through the crack overhead, creating stunning light effects." },
        { key: "necrópolis", name: "Gorge End (Final del Cañón)", desc: "The end of the hiking trail, where the gorge suddenly opens wide. From here you can enjoy sweeping panoramic views of the Quebrada de Humahuaca." }
      ]
    },
    itinerary: {
      title: "Suggested Itinerary",
      intro: "A half-day is enough for a rewarding visit. Use the timeline below as a guide, and adjust freely to your pace and the weather.",
      steps: [
        { time: "08:00", title: "Arrive at the trailhead", text: "Get there early for the best morning light. Apply sunscreen, hydrate, and begin your hike." },
        { time: "08:30", title: "First Viewpoint", text: "Climb to the viewpoint for a full panorama of Garganta del Diablo. The red rock walls are especially stunning in the morning light." },
        { time: "09:30", title: "Waterfall Area", text: "Descend into the gorge floor and experience the waterfall up close. Rainbows are frequently visible in the mist." },
        { time: "10:30", title: "Slot Passage", text: "Enter the narrowest section of the gorge, where the walls close in and the sky becomes a ribbon overhead." },
        { time: "12:00", title: "Return to Tilcara", text: "Head back to town and enjoy a north-western highland lunch, wrapping up your half-day nature adventure." }
      ]
    },
    ctaBand: {
      title: "Plan Your Trip to Garganta del Diablo",
      subtitle: "From hiking preparation to nearby exploration, make your gorge visit relaxed and in depth.",
      buttons: ["Opening Hours & Tickets", "Hiking Safety Guide", "View Location on Maps"]
    }
  },
  es: {
    nav: { history: "Maravilla Natural", architecture: "Geología", monuments: "Senderismo", eco: "Conservación", visiting: "Info de Visita", transportation: "Cómo Llegar", gallery: "Galería", reviews: "Reseñas", faq: "FAQ", location: "Ubicación" },
    hero: {
      tags: ["Patrimonio Mundial UNESCO", "Cañón y Cascada Natural", "Altitud ~2.450m"],
      tagline: "Argentina · Provincia de Jujuy · Tilcara",
      title: "Garganta del Diablo",
      subtitle: "Cañón Natural · Quebrada de Humahuaca · Andes",
      cta: "Explorá Esta Maravilla Natural",
      description: {
        address: "Paraje Garganta del Diablo, Tilcara, Jujuy, Argentina",
        phone: "+54 388 422-1325",
        category: "Maravilla Natural · Cañón y Cascada"
      }
    },
    rating: { reviews: "reseñas", source: "Google Reseñas" },
    history: {
      title: "Obra Maestra de la Naturaleza",
      intro: `La Garganta del Diablo es una de las maravillas naturales más impresionantes cerca de Tilcara, en la provincia de Jujuy, Argentina. Es un cañón angosto tallado por el agua durante millones de años, donde las cascadas se precipitan a las profundidades y retumban entre paredes de roca rojiza.\n\n**El Nacimiento de una Maravilla Geológica**\nLa Garganta del Diablo se encuentra en un afluente de la Quebrada de Humahuaca, a unos **2.450 metros** de altitud. Las paredes del cañón se elevan varias decenas de metros y en algunos tramos se estrechan hasta apenas un metro y medio de ancho. La roca exhibe capas de rojo intenso, naranja y ocre — un registro de cientos de millones de años de deposición geológica.\n\n**El Agua Como Escultora**\nEl cañón se formó por el levantamiento de los Andes combinado con la erosión implacable del río. Durante el deshielo estival y la temporada de lluvias, el caudal aumenta drásticamente y los torrentes cargados de arena y piedras cortan agresivamente la roca madre — esculpiendo lentamente la grieta profunda que vemos hoy. Pararse en el fondo del cañón y mirar hacia arriba, hacia la franja de cielo, es una experiencia que revela a la naturaleza como la más grande de todas las escultoras.\n\n**Parte de un Patrimonio Mundial UNESCO**\nEn **2003**, la Quebrada de Humahuaca — hogar de la Garganta del Diablo — fue declarada **Patrimonio de la Humanidad por la UNESCO**. Este valle de 155 km de largo da testimonio de 10.000 años de evolución cultural, desde los cazadores-recolectores prehistóricos, pasando por el Imperio Inca, hasta la época colonial española. La Garganta del Diablo, como uno de los rasgos naturales más impactantes de la quebrada, atrae a senderistas y fotógrafos de todo el mundo.`
    },
    myths: {
      title: "Leyendas de la Garganta y Mitos Andinos",
      intro: "En la cosmovisión andina, cada rasgo del paisaje guarda una historia ancestral. El mismo nombre 'Garganta del Diablo' está envuelto en un dramático folclore.",
      items: [
        {
          title: "La Leyenda del Nombre",
          content: "Una conmovedora leyenda local explica cómo la Garganta del Diablo obtuvo su nombre.\n\nHace mucho tiempo, una hermosa doncella indígena se enamoró de un joven de los colonizadores. Su padre — el respetado cacique de la tribu — se opuso ferozmente al romance intercultural. En una noche tormentosa, el joven intentó fugarse con la doncella.\n\nFurioso, el cacique rezó a la Pachamama (Madre Tierra) pidiendo castigo. La tierra se partió de repente, creando un abismo sin fondo. El joven cayó al vacío, y la doncella quedó llorando al borde del precipicio. Se dice que sus lágrimas se convirtieron en la cascada, y el rugido que resuena en el cañón es el mismo diablo aullando por el amor frustrado.\n\nOtra versión, más directa, sostiene que durante la temporada de crecidas, el estruendo del agua golpeando las paredes de roca suena exactamente como el rugido de un demonio — de ahí el nombre 'Garganta del Diablo'. Cualquiera que sea la versión, el nombre captura perfectamente el poder crudo e imponente de esta maravilla natural."
        },
        {
          title: "Tierra Sagrada de la Pachamama",
          content: "En el sistema de creencias andino, la Pachamama es la diosa madre suprema que preside la fertilidad, la agricultura y toda la vida terrenal. Cada 1° de agosto, toda la provincia de Jujuy celebra la ceremonia de la Pachamama.\n\nLa zona de Tilcara, alrededor de la Garganta del Diablo, es considerada un lugar donde el poder de la Pachamama es especialmente fuerte. Antes de emprender una caminata por el cañón, la gente local suele verter unas gotas de chicha en la tierra o colocar hojas de coca como ofrenda a la Madre Tierra, pidiendo un viaje seguro.\n\nEl agua que fluye sin cesar por la garganta es vista como la sangre vital de la Pachamama — nutriendo toda la vida del altiplano andino. Cada agosto, los lugareños llevan comida y bebida a la entrada del cañón para realizar la sencilla pero reverente Corpachada (ofrenda a la tierra), manteniendo vivo el pacto más antiguo con la Madre Tierra."
        },
        {
          title: "Coquena: El Guardián de la Garganta",
          content: "En el folclore del noroeste argentino, Coquena es un pequeño espíritu protector de los animales silvestres, especialmente vicuñas y guanacos. Viste poncho y sombrero alón, y deambula silenciosamente por los rincones más profundos de la quebrada.\n\nEn los acantilados alrededor de la Garganta del Diablo, ocasionalmente se pueden avistar guanacos salvajes. Los lugareños dicen que Coquena los está pastoreando, y solo aquellos con un corazón puro pueden ver al espíritu guardián.\n\nCoquena castiga a los cazadores que matan animales sin necesidad, pero guía a los pastores bondadosos hacia aguas seguras y buenos caminos. En este agreste terreno de cañones, la leyenda recuerda a cada visitante: tratá con bondad a las criaturas de esta tierra, y honrarás el valioso legado de los ancestros."
        }
      ]
    },
    curiosities: {
      title: "Curiosidades Naturales y Viñetas Culturales",
      content: `**Los Sitios Hermanos de la Garganta del Diablo**\nCuriosamente, Argentina tiene más de un rasgo natural llamado 'Garganta del Diablo'. El más famoso es sin duda la Garganta del Diablo de las Cataratas del Iguazú — uno de los sistemas de cataratas más espectaculares del mundo. Si bien la Garganta del Diablo de Tilcara es considerablemente más pequeña en escala, su entorno de cañón de ranura a gran altitud y sus paredes de roca de color óxido le confieren una estética completamente diferente e igualmente hipnótica.\n\n**Una Paleta de Pintor Geológica**\nLas paredes rocosas de la Garganta del Diablo muestran una impresionante gama de colores — desde el rojo intenso y el naranja quemado hasta el violeta y el gris pálido. Estos tonos provienen de minerales depositados durante diferentes períodos geológicos: capas rojas ricas en óxido de hierro, bandas violetas teñidas de manganeso y vetas pálidas de carbonato de calcio, formando juntos una 'pintura al óleo geológica' de millones de años.\n\n**La Garganta Bajo las Estrellas**\nLejos de la contaminación lumínica urbana, el área alrededor de la Garganta del Diablo ofrece una observación estelar excepcional. De mayo a septiembre (invierno del hemisferio sur), la Vía Láctea es vívidamente visible en el cielo nocturno limpio y seco de la alta montaña. Los operadores turísticos locales ofrecen caminatas nocturnas de observación de estrellas, permitiendo a los visitantes contemplar la inmensidad del cosmos en el profundo silencio del cañón.\n\n**Hogar del Cóndor Andino**\nLos acantilados de la Garganta del Diablo son un hábitat importante para el cóndor andino (Cóndor Andino). Con una envergadura que alcanza los tres metros, esta majestuosa ave es un símbolo de los Andes y es considerada por las culturas indígenas como un mensajero sagrado entre el cielo y la tierra. Los visitantes afortunados pueden verlos planeando en las corrientes térmicas del cañón — una visión inolvidable.`
    },
    eco: {
      title: "Conservación Ecológica",
      intro: "Como parte del Patrimonio de la Humanidad de la Quebrada de Humahuaca, el frágil ecosistema de la Garganta del Diablo merece el cuidado de cada visitante. Como guía educativa independiente sin fines de lucro, promovemos el acercamiento más respetuoso a esta maravilla natural.",
      items: [
        "**Permanecé en el sendero**: seguí los caminos establecidos — no crees nuevos, ya que esto provoca erosión del suelo",
        "**No dejés rastro**: llevate toda la basura y residuos, incluidos los biodegradables como cáscaras de fruta y pañuelos",
        "**No molestés a la fauna**: no alimentes ni te acerques a los animales silvestres; protegé especialmente al cóndor andino y al guanaco",
        "**Protegé el agua**: el arroyo del cañón es una fuente vital para las comunidades aguas abajo — no laves ni arrojes nada en él",
        "**Exploración silenciosa**: el cañón tiene una acústica única — mantené bajo el volumen para que todos puedan escuchar los sonidos de la naturaleza",
        "**Llevate solo fotos**: no recolectes rocas, plantas ni fósiles — dejá que permanezcan donde pertenecen"
      ]
    },
    architecture: {
      title: "Formación Geológica y Maravilla Natural",
      intro: "La Garganta del Diablo es una obra maestra esculpida por la naturaleza durante millones de años. Su estructura geológica única no solo ofrece vistas espectaculares, sino que también proporciona un laboratorio natural para estudiar la orogenia andina.",
      specs: {
        structure: { title: "Estructura del Cañón", content: "La Garganta del Diablo es un típico cañón de ranura (slot canyon) — mucho más profundo que ancho. El cañón se extiende aproximadamente 500 metros, alcanza profundidades de unos 40 metros, y se estrecha hasta apenas 1,5 metros en su punto más angosto. La luz del sol se filtra por la grieta superior, proyectando patrones cambiantes de luz y sombra sobre las paredes de roca rojiza y creando una experiencia espacial casi surrealista.\n\nUn arroyo perenne corre por el fondo del cañón. Durante la temporada de lluvias (generalmente de diciembre a marzo), el agua aumenta drásticamente, formando potentes cascadas; en la estación seca se convierte en un arroyo cristalino que los visitantes pueden vadear. Las paredes han sido pulidas hasta quedar lisas como el vidrio por milenios de agua fluyente, mostrando hermosas texturas aerodinámicas." },
        design: { title: "Capas de Roca y Colores", content: "Las paredes de la Garganta del Diablo exponen una magnífica sección transversal de estratos sedimentarios, que narran cientos de millones de años de historia geológica. La roca es predominantemente capas alternadas de arenisca, lutita y conglomerado, depositadas desde el Paleozoico hasta el Mesozoico.\n\nEl rasgo más llamativo es la variación cromática — del rojo intenso (rico en óxido de hierro) al naranja dorado (hidróxidos de hierro), pasando por el violeta (minerales de manganeso) y el gris pálido (carbonato de calcio) — como si la tierra misma hubiera sido teñida en capas por el tiempo. Estos colores son más vivos al amanecer y al atardecer, convirtiendo el cañón en el sueño de cualquier fotógrafo." },
        optics: { title: "Características Hidrológicas", content: "El agua que fluye por el cañón proviene del deshielo y las lluvias en las alturas de los Andes. Es rica en minerales y adquiere un sutil brillo metálico, especialmente al atravesar los estratos de roca roja.\n\nLa cascada es uno de los rasgos más icónicos de la Garganta del Diablo. Durante la temporada de lluvias, el agua se precipita desde una altura de unos 15 metros, estrellándose contra las rocas y llenando el cañón de neblina — a menudo se forman arcoíris a través del cañón bajo la luz del sol. Incluso en la estación seca, la vista de finos hilos de agua deslizándose lentamente por las paredes de roca pulida tiene una belleza tranquila y meditativa propia." }
      },
      plaque: {
        title: "Información Básica",
        items: [
          { label: "Nombre", value: "Garganta del Diablo" },
          { label: "Ubicación", value: "Cerca de Tilcara, Provincia de Jujuy, Argentina" },
          { label: "Edad Geológica", value: "Roca sedimentaria Paleozoico–Mesozoico" },
          { label: "Altitud", value: "aprox. 2.450 m" },
          { label: "Profundidad del Cañón", value: "hasta 40 m" },
          { label: "Área Protegida", value: "Quebrada de Humahuaca (UNESCO 2003)" },
          { label: "Tipo", value: "Cañón de Ranura / Cascada / Maravilla Natural" }
        ]
      }
    },
    monuments: {
      title: "Qué Hacer en la Garganta del Diablo",
      intro: "La Garganta del Diablo combina senderismo de cañón, observación de cascadas y paisajes andinos imponentes. Las siguientes experiencias son apreciadas por amantes de la naturaleza, fotógrafos y viajeros de aventura.",
      items: [
        { name: "Caminata y Vadeo por el Cañón", description: "Seguí el sendero a lo largo del fondo del cañón, vadeando el arroyo mientras las paredes de roca se cierran a tu alrededor. Mirá hacia arriba, hacia la cinta de cielo — el efecto de cañón de ranura es realmente imponente. El sonido del agua corriendo, el canto de los pájaros haciendo eco y la brisa fresca en tu rostro hacen de esta la forma más íntima de conectar con la naturaleza." },
        { name: "Observación de Cascadas y Fotografía", description: "Durante la temporada de lluvias (diciembre–marzo), la cascada de la Garganta del Diablo está en su máximo esplendor. Una cortina de agua truena desde más de diez metros, llenando el cañón de neblina. Frecuentemente se forman arcoíris sobre la cascada — el sueño de cualquier fotógrafo. Llevá protección impermeable para tu equipo fotográfico." },
        { name: "Avistaje de Aves y Cóndores", description: "Los acantilados de la Garganta del Diablo son hogar del cóndor andino, cuya envergadura de tres metros lo convierte en el verdadero rey de los cielos andinos. Llevá binoculares y también podrás ver flamencos andinos y numerosas especies de picaflores aprovechando las corrientes térmicas del cañón." },
        { name: "Vistas Panorámicas del Cañón", description: "Desde el terreno alto en la entrada del cañón, toda la Quebrada de Humahuaca se despliega en un panorama imponente. Capa tras capa de montañas multicolores brillan bajo la luz del sol, mientras la grieta oscura de la Garganta del Diablo corta el primer plano — en momentos como este, entendés realmente por qué este paisaje es Patrimonio de la Humanidad." }
      ]
    },
    contrast: {
      title: "La Danza Eterna del Agua y la Piedra",
      intro: "La magia de la Garganta del Diablo reside en el profundo diálogo entre el agua y la piedra a lo largo de millones de años. El agua blanda, con persistencia implacable, ha tallado la roca dura hasta crear una vista que corta el aliento. Dos imágenes capturan la majestuosidad de esta fuerza natural.",
      before: "Torrente en la Roca",
      after: "Panorama del Cañón"
    },
    visiting: {
      title: "Planificá Tu Visita",
      intro: "La Garganta del Diablo está abierta al público todo el año. Se recomienda una visita de medio día para recorrerla en profundidad. La siguiente información te ayuda a planificar con tranquilidad.",
      hours: { title: "Horarios", content: "Todos los días: **08:00–18:00**\nAbierto todo el año (puede cerrar en condiciones climáticas extremas)\nSe recomiendan visitas matutinas para la mejor luz y para evitar posibles tormentas de la tarde.", note: "Los horarios pueden variar según la temporada y el clima; consultá con el centro de información turística local antes de la visita." },
      price: { title: "Entrada", content: "Se cobra entrada; el precio exacto se exhibe en el lugar. Residentes argentinos, estudiantes y jubilados suelen tener descuentos.\nLo recaudado financia el mantenimiento de senderos y la conservación ecológica.", note: "Llevá efectivo (pesos argentinos), ya que las tarjetas pueden no ser aceptadas en zonas remotas." },
      duration: { title: "Duración Sugerida", content: "Caminata por el cañón ida y vuelta + fotos: unas **2–3 horas**.\nExploración profunda + avistaje de aves + fotos panorámicas: **4–5 horas**.", note: "Combiná con el pueblo de Tilcara, el Cerro de los Siete Colores (Purmamarca) y la Quebrada de Humahuaca para un viaje de naturaleza de 2–3 días por el noroeste." },
      tips: { title: "Consejos y Recomendaciones", items: [
        "**Aclimatación a la altura**: el cañón está a ~2.450m. Tomalo con calma y bebé abundante agua",
        "**Protección solar imprescindible**: el sol andino es intenso en altura — usá protector solar de alto factor, anteojos y sombrero de ala ancha",
        "**Calzado impermeable**: vas a tener que vadear el arroyo — calzado de trekking impermeable y antideslizante es esencial",
        "**Hidratación**: el clima de altura es muy seco; llevá al menos 1 litro de agua por persona",
        "**Protegé tus equipos**: la neblina de la cascada puede ser intensa — llevá bolsas impermeables para cámaras y teléfonos",
        "**Consultá el clima**: pueden ocurrir crecidas repentinas durante la temporada de lluvias (dic–mar); siempre revisá el pronóstico antes de salir"
      ] },
      essentials: [
        { icon: "🫁", title: "Altura", text: "A ~2.450m, tomala con calma al llegar, bebé abundante agua y masticá coca para aliviar síntomas." },
        { icon: "☀️", title: "Protección solar", text: "El sol andino es extremo — usá anteojos, sombrero de ala ancha y protector solar alto." },
        { icon: "👟", title: "Calzado impermeable", text: "Vas a vadear el arroyo del cañón — calzado de trekking impermeable es imprescindible." },
        { icon: "💧", title: "Hidratación", text: "El clima de altura es muy seco; llevá al menos 1 litro de agua por persona." }
      ]
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "✈️ Desde la Capital / Aeropuerto de Jujuy", content: "El aeropuerto más cercano es el Aeropuerto Internacional Gobernador Horacio Guzmán (JUJ), a unos 113 km de Tilcara. El Aeropuerto de Salta (SLA) es una alternativa, a unos 210 km.", options: [
        { name: "Auto propio / alquilado (Recomendado)", price: "aprox. 1,5 hs", time: "113 km", steps: ["Desde el aeropuerto de Jujuy tomar la Ruta Nacional 9 (RN-9) hacia el norte", "Recorrer la Quebrada de Humahuaca pasando por Volcán, Tumbaya y otros pueblos", "Llegar a Tilcara y seguir las indicaciones hacia el ingreso de la Garganta del Diablo"] },
        { name: "Traslado privado (aeropuerto o ciudad)", price: "aprox. 1,5–2 hs", time: "≈113 km", steps: ["Reservá un traslado desde JUJ o desde San Salvador de Jujuy", "Viaje directo a Tilcara (con paradas escénicas opcionales)", "Desde Tilcara continuá hasta el ingreso"] },
        { name: "Taxi/Remís + conexión en ómnibus", price: "aprox. 2–3 hs (con trasbordo)", time: "JUJ → terminal → Tilcara", steps: ["Tomá un taxi o Remís desde JUJ hasta la terminal de ómnibus en San Salvador de Jujuy", "Comprá un pasaje a Tilcara (según disponibilidad)", "Desde Tilcara, taxi/Remís o caminata hasta el inicio del sendero"] }
      ]},
      publicTransport: {
        title: "🚌 Ómnibus de larga distancia / Transporte público",
        content: "Si no manejás, lo habitual es llegar primero a Tilcara y luego completar los últimos 5 km hasta el ingreso. Los horarios pueden variar según temporada — consultá en la terminal.",
        options: [
          {
            name: "San Salvador de Jujuy → Tilcara (ómnibus)",
            description: "Línea regular desde la capital provincial hacia Tilcara.",
            steps: ["Ir a la terminal de ómnibus en San Salvador de Jujuy", "Comprar un pasaje a Tilcara (según disponibilidad)", "Desde Tilcara, taxi/Remís o caminata hasta el ingreso"]
          },
          {
            name: "Salta → Tilcara (ómnibus)",
            description: "Útil si llegás vía Salta o combinás recorridos por el noroeste.",
            steps: ["Ir a la terminal de Salta", "Comprar un pasaje a Tilcara (directo o con paradas)", "Desde Tilcara, completar el último tramo al ingreso"]
          },
          {
            name: "Tilcara → ingreso (último tramo)",
            description: "El ingreso está a unos 5 km; el camino es mayormente de tierra.",
            steps: ["Taxi/Remís hasta el estacionamiento e inicio del sendero", "Alternativa: caminar (≈1 hora) o ir en bicicleta", "Ingresar siguiendo la señalización"]
          }
        ]
      },
      city: { title: "🏘️ Desde el Pueblo de Tilcara", content: "La Garganta del Diablo está a unos 5 km de Tilcara. Se puede ir caminando (aprox. 1 hora), en bicicleta o en taxi. Algunos operadores turísticos también ofrecen excursiones guiadas en 4x4.", steps: ["Desde la plaza principal de Tilcara seguir las indicaciones hacia la Garganta del Diablo", "Seguir el camino de tierra unos 5 km", "Llegar al estacionamiento e inicio del sendero"] },
      tips: { title: "Transporte y Altura", items: [
        "**Altura**: Tilcara está a ~2.450m — conviene aclimatarse medio día antes de hacer la caminata por el cañón",
        "San Salvador de Jujuy está a ~85 km de Tilcara (≈1 hora en auto)",
        "La Ruta Nacional 9 (RN-9) está en buen estado y el paisaje es espectacular — uno de los recorridos más escénicos de Argentina",
        "Ómnibus directos van desde la ciudad de Salta hasta Tilcara (aprox. 3,5–4 horas)",
        "Combiná con Purmamarca (Cerro de los Siete Colores), Humahuaca e Iruya para un itinerario de varios días"
      ] }
    },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más Fotos en Google Maps", categories: [ { key: "gorge", label: "Cañón" }, { key: "waterfall", label: "Cascadas" }, { key: "rock", label: "Texturas de Roca" }, { key: "panorama", label: "Panorámicas" } ] },
    reviews: {
      title: "Reseñas de Visitantes y Exploración Cercana",
      subtitle: "Voces de la Garganta del Diablo: Testimonios Reales de Google Maps",
      viewMore: "Ver Más Reseñas en Google Maps",
      nearbyTitle: "Atracciones Cercanas que Vale la Pena Visitar",
      nearbyIntro: "Después de explorar la Garganta del Diablo, podés visitar fácilmente los siguientes destinos cercanos:",
      nearbyItems: [
        { name: "Cerro de los Siete Colores", description: "Ubicado en Purmamarca, a unos 25 km de Tilcara. Famoso por sus franjas de colores rojo, naranja, amarillo, verde y púrpura — uno de los puntos fotográficos más icónicos del noroeste argentino." },
        { name: "Pucará de Tilcara (Fortaleza Preincaica)", description: "Sitio arqueológico preincaico en Tilcara, a unos 2.465 m de altitud. Esta fortaleza de piedra milenaria domina la Quebrada de Humahuaca y es un lugar magnífico para conocer la cultura indígena andina." },
        { name: "Salinas Grandes", description: "Enorme salar en el límite entre Jujuy y Salta, a unos 3.450 m de altitud. La costra blanca deslumbrante contra un cielo azul cobalto crea un paisaje surrealista — una de las maravillas naturales más impresionantes del altiplano andino." }
      ]
    },
    faq: { title: "Preguntas Frecuentes", subtitle: "Conocé Más Sobre la Garganta del Diablo", items: [
      { question: "¿Qué significa 'Garganta del Diablo'?", answer: "'Garganta del Diablo' hace referencia a la forma única del cañón — una grieta angosta y profunda que se asemeja a una garganta gigante — y al rugido atronador del agua de las crecidas haciendo eco en el cañón, que los lugareños comparan con el rugido de un demonio. El folclore local también narra una trágica historia de amor intercultural que añade matices románticos y misteriosos al nombre." },
      { question: "¿Cuánto tiempo lleva visitar la Garganta del Diablo?", answer: "La caminata por el cañón ida y vuelta lleva unas 2–3 horas (incluyendo paradas para fotos y miradores). Si planeás explorar en profundidad, hacer avistaje de aves o fotografía, calculá 4–5 horas. El horario es todos los días de 08:00–18:00; las visitas matutinas ofrecen la mejor luz." },
      { question: "¿Qué debo tener en cuenta al visitar?", answer: "El cañón está a ~2.450m; tomate tiempo para aclimatarte. El sol andino es extremo — usá buena protección solar. Vas a necesitar vadear el arroyo, así que usá calzado de trekking impermeable y antideslizante. Llevá al menos 1 litro de agua por persona. Pueden ocurrir crecidas repentinas en temporada de lluvias (dic–mar) — siempre revisá el pronóstico. Llevate toda la basura y ayudá a proteger este frágil ecosistema." },
      { question: "¿Cómo llego a la Garganta del Diablo desde Buenos Aires?", answer: "Volá de Buenos Aires al Aeropuerto Internacional de Jujuy (JUJ, ≈2 hs), luego manejá o tomá un micro por la Ruta Nacional 9 hacia el norte unos 113 km (1,5 hs) hasta Tilcara. La Garganta del Diablo está a unos 5 km de Tilcara — podés tomar un taxi, andar en bicicleta o caminar. Alternativamente, volá a Salta (SLA) y viajá unos 210 km (3,5–4 hs)." },
      { question: "¿Es la misma Garganta del Diablo que la de las Cataratas del Iguazú?", answer: "No, son lugares diferentes. Argentina tiene dos rasgos naturales famosos llamados 'Garganta del Diablo': la enorme cascada de las Cataratas del Iguazú (en la frontera con Brasil, al noreste), y este cañón de ranura de altura cerca de Tilcara (en Jujuy, al noroeste). Ambos son maravillas naturales, pero de tipos completamente distintos — una es una catarata tropical de baja altitud y la otra un cañón de ranura de región árida de altura." }
    ]},
    location: { title: "Ubicación", address: "Paraje Garganta del Diablo\nTilcara, Provincia de Jujuy\nArgentina", openMaps: "Ver en Google Maps" },
    footer: { callToAction: "La Garganta del Diablo es un tesoro natural de la Quebrada de Humahuaca, Patrimonio de la Humanidad — una maravilla esculpida por la naturaleza durante millones de años. Sumate a nosotros para proteger este frágil ecosistema de cañón y que el diálogo eterno entre el agua y la piedra continúe por generaciones.", text: "© 2026 Guía de Garganta del Diablo · Todos los derechos reservados.\nEste sitio web es una guía educativa independiente sin fines de lucro dedicada a difundir información precisa sobre la Garganta del Diablo. No estamos afiliados con el gobierno argentino ni ninguna autoridad oficial.", made: "Este es un proyecto educativo independiente sin fines de lucro, creado para exploradores de la naturaleza, senderistas y viajeros culturales.", linksTitle: "Enlaces Amigos", links: LINKS_BY_LOCALE.es },
    siteMap: {
      title: "Mapa del Sendero",
      intro: "Pasá el cursor (o tocá) sobre los marcadores del mapa para explorar las áreas clave de la Garganta del Diablo y sus alrededores.",
      hint: "Pasá el cursor · Tocá para fijar",
      cta: "Ver el mapa completo del sendero",
      zones: [
        { key: "entrada", name: "Entrada del Sendero", desc: "El punto de partida de la caminata por el cañón, con estacionamiento, carteles informativos y baños básicos. Hacé tus preparativos finales aquí." },
        { key: "iglesia", name: "Mirador 1", desc: "El primer mirador principal del sendero, con vistas elevadas de todo el cañón. Uno de los mejores lugares para fotografía panorámica." },
        { key: "monumento", name: "Zona de la Cascada", desc: "Hogar de la icónica cascada de la Garganta del Diablo. Más espectacular durante la temporada de lluvias, con arcoíris frecuentes sobre el cañón." },
        { key: "corrales", name: "Paso Estrecho", desc: "La sección más angosta del cañón, donde las paredes casi se tocan. Los rayos de sol penetran por la grieta superior, creando efectos de luz impresionantes." },
        { key: "necrópolis", name: "Final del Cañón", desc: "El final del sendero, donde el cañón se abre de repente. Desde aquí se disfrutan vistas panorámicas de toda la Quebrada de Humahuaca." }
      ]
    },
    itinerary: {
      title: "Itinerario Sugerido",
      intro: "Con medio día alcanza para una visita gratificante. Usá la línea de tiempo como guía y ajustala a tu ritmo y al clima.",
      steps: [
        { time: "08:00", title: "Llegada al inicio del sendero", text: "Llegá temprano para la mejor luz matutina. Aplicate protector solar, hidratate y empezá la caminata." },
        { time: "08:30", title: "Primer Mirador", text: "Subí al mirador para un panorama completo de la Garganta del Diablo. Las paredes de roca roja son especialmente impresionantes con la luz de la mañana." },
        { time: "09:30", title: "Zona de la Cascada", text: "Bajá al fondo del cañón y experimentá la cascada de cerca. Frecuentemente se ven arcoíris en la neblina." },
        { time: "10:30", title: "Paso Estrecho", text: "Entrá en la sección más angosta del cañón, donde las paredes se cierran y el cielo se convierte en una cinta." },
        { time: "12:00", title: "Regreso a Tilcara", text: "Volvé al pueblo y disfrutá un almuerzo norteño, cerrando tu media jornada de aventura natural." }
      ]
    },
    ctaBand: {
      title: "Planificá tu Viaje a la Garganta del Diablo",
      subtitle: "Desde la preparación para la caminata hasta la exploración cercana, hacé tu visita al cañón relajada y en profundidad.",
      buttons: ["Horarios y Entradas", "Guía de Seguridad para Senderismo", "Ver Ubicación en Maps"]
    }
  },
  it: {
    nav: { history: "Meraviglia Naturale", architecture: "Geologia", monuments: "Escursioni", eco: "Conservazione", visiting: "Info Visita", transportation: "Come Arrivare", gallery: "Galleria", reviews: "Recensioni", faq: "FAQ", location: "Posizione" },
    hero: {
      tags: ["Patrimonio Mondiale UNESCO", "Canyon e Cascata Naturale", "Altitudine ~2.450m"],
      tagline: "Argentina · Provincia di Jujuy · Tilcara",
      title: "Garganta del Diablo",
      subtitle: "Gola del Diavolo · Canyon Naturale · Quebrada de Humahuaca",
      cta: "Esplora Questa Meraviglia Naturale",
      description: {
        address: "Paraje Garganta del Diablo, Tilcara, Jujuy, Argentina",
        phone: "+54 388 422-1325",
        category: "Meraviglia Naturale · Canyon e Cascata"
      }
    },
    rating: { reviews: "recensioni", source: "Recensioni Google" },
    history: {
      title: "Capolavoro della Natura",
      intro: `La Garganta del Diablo è una delle meraviglie naturali più affascinanti vicino a Tilcara, nella provincia di Jujuy, in Argentina. È uno stretto canyon scavato dall'acqua in milioni di anni, dove le cascate si tuffano nelle profondità e rimbombano tra pareti di roccia rossastra.\n\n**La Nascita di una Meraviglia Geologica**\nLa Garganta del Diablo si trova in un affluente della Quebrada de Humahuaca, a circa **2.450 metri** di altitudine. Le pareti del canyon si innalzano per diverse decine di metri e in alcuni tratti si restringono fino a un metro e mezzo di larghezza. La roccia mostra strati di rosso intenso, arancione e ocra — una registrazione di centinaia di milioni di anni di deposizione geologica.\n\n**L'Acqua Come Scultrice**\nIl canyon si è formato grazie al sollevamento delle Ande combinato con l'erosione implacabile del fiume. Durante lo scioglimento estivo e la stagione delle piogge, il volume dell'acqua aumenta drasticamente e i torrenti carichi di sabbia e pietre incidono aggressivamente la roccia madre — scolpendo lentamente la profonda fessura che vediamo oggi. Stare sul fondo del canyon e guardare verso l'alto, verso la striscia di cielo, è un'esperienza che rivela la natura come la più grande di tutte le scultrici.\n\n**Parte di un Patrimonio Mondiale UNESCO**\nNel **2003**, la Quebrada de Humahuaca — sede della Garganta del Diablo — è stata dichiarata **Patrimonio dell'Umanità dall'UNESCO**. Questa valle lunga 155 km testimonia 10.000 anni di evoluzione culturale, dai cacciatori-raccoglitori preistorici, attraverso l'Impero Inca, fino all'epoca coloniale spagnola. La Garganta del Diablo, come uno degli elementi naturali più spettacolari della valle, attira escursionisti e fotografi da tutto il mondo.`
    },
    myths: {
      title: "Leggende della Gola e Miti Andini",
      intro: "Nella cosmovisione andina, ogni elemento del paesaggio custodisce una storia ancestrale. Il nome stesso 'Garganta del Diablo' è avvolto in un drammatico folclore.",
      items: [
        {
          title: "La Leggenda del Nome",
          content: "Una commovente leggenda locale spiega come la Garganta del Diablo abbia ottenuto il suo nome.\n\nMolto tempo fa, una bellissima fanciulla indigena si innamorò di un giovane dei colonizzatori. Suo padre — il rispettato capo della tribù — si oppose ferocemente alla relazione interculturale. In una notte tempestosa, il giovane tentò di fuggire con la fanciulla.\n\nFurioso, il capo pregò la Pachamama (Madre Terra) chiedendo una punizione. La terra si spaccò all'improvviso, creando un abisso senza fondo. Il giovane precipitò nel vuoto, e la fanciulla rimase piangendo sull'orlo del precipizio. Si dice che le sue lacrime siano diventate la cascata, e il ruggito che risuona nel canyon è il diavolo stesso che urla per l'amore contrastato.\n\nUn'altra versione, più diretta, sostiene che durante la stagione delle piene, il fragore dell'acqua che sbatte contro le pareti rocciose suoni esattamente come il ruggito di un demone — da qui il nome 'Gola del Diavolo'. Qualunque versione si preferisca, il nome cattura perfettamente la potenza grezza e imponente di questa meraviglia naturale."
        },
        {
          title: "Terra Sacra della Pachamama",
          content: "Nel sistema di credenze andino, la Pachamama è la dea madre suprema che presiede la fertilità, l'agricoltura e tutta la vita terrena. Ogni 1° agosto, l'intera provincia di Jujuy celebra la cerimonia della Pachamama.\n\nLa zona di Tilcara, intorno alla Garganta del Diablo, è considerata un luogo dove il potere della Pachamama è particolarmente forte. Prima di intraprendere un'escursione nel canyon, la gente del posto versa spesso alcune gocce di chicha sulla terra o depone foglie di coca come offerta alla Madre Terra, chiedendo un viaggio sicuro.\n\nL'acqua che scorre incessantemente attraverso la gola è vista come il sangue vitale della Pachamama — che nutre tutta la vita dell'altopiano andino. Ogni agosto, gli abitanti del luogo portano cibo e bevande all'ingresso del canyon per compiere la semplice ma riverente Corpachada (offerta alla terra), mantenendo vivo il patto più antico con la Madre Terra."
        },
        {
          title: "Coquena: Il Guardiano della Gola",
          content: "Nel folclore del nord-ovest argentino, Coquena è un piccolo spirito protettore degli animali selvatici, in particolare vigogne e guanachi. Indossa un poncho e un cappello a tesa larga, e vaga silenziosamente negli angoli più profondi della quebrada.\n\nSulle scogliere intorno alla Garganta del Diablo, occasionalmente si possono avvistare guanachi selvatici. La gente del posto dice che Coquena li sta pascolando, e solo chi ha un cuore puro può vedere lo spirito guardiano.\n\nCoquena punisce i cacciatori che uccidono animali senza necessità, ma guida i pastori dal cuore buono verso acque sicure e buoni sentieri. In questo aspro territorio di canyon, la leggenda ricorda a ogni visitatore: tratta con gentilezza le creature di questa terra, e onorerai la preziosa eredità degli antenati."
        }
      ]
    },
    curiosities: {
      title: "Curiosità Naturali e Vignette Culturali",
      content: `**I Siti Gemelli della Garganta del Diablo**\nCuriosamente, l'Argentina ha più di un elemento naturale chiamato 'Garganta del Diablo'. Il più famoso è senza dubbio la Garganta del Diablo delle Cascate dell'Iguazú — uno dei sistemi di cascate più spettacolari del mondo. Sebbene la Garganta del Diablo di Tilcara sia considerevolmente più piccola come dimensioni, il suo ambiente di slot canyon ad alta quota e le sue pareti di roccia color ruggine le conferiscono un'estetica completamente diversa e altrettanto ipnotica.\n\n**Una Tavolozza Geologica**\nLe pareti rocciose della Garganta del Diablo mostrano una straordinaria gamma di colori — dal rosso intenso e l'arancione bruciato fino al violetto e al grigio pallido. Queste tonalità provengono da minerali depositati durante diversi periodi geologici: strati rossi ricchi di ossido di ferro, bande viola tinte di manganese e venature chiare di carbonato di calcio, formando insieme un 'dipinto a olio geologico' di milioni di anni.\n\n**La Gola Sotto le Stelle**\nLontano dall'inquinamento luminoso urbano, l'area intorno alla Garganta del Diablo offre un'osservazione stellare eccezionale. Da maggio a settembre (inverno dell'emisfero australe), la Via Lattea è vividamente visibile nel limpido e secco cielo notturno d'alta quota. Gli operatori turistici locali offrono escursioni notturne di osservazione delle stelle, permettendo ai visitatori di contemplare l'immensità del cosmo nel profondo silenzio della gola.\n\n**Casa del Condor Andino**\nLe scogliere della Garganta del Diablo sono un habitat importante per il condor andino (Cóndor Andino). Con un'apertura alare che raggiunge i tre metri, questo maestoso uccello è un simbolo delle Ande ed è considerato dalle culture indigene un messaggero sacro tra cielo e terra. I visitatori fortunati possono vederli planare sulle correnti termiche del canyon — una visione indimenticabile.`
    },
    eco: {
      title: "Conservazione Ecologica",
      intro: "Come parte del Patrimonio dell'Umanità della Quebrada de Humahuaca, il fragile ecosistema della Garganta del Diablo merita la cura di ogni visitatore. Come guida educativa indipendente non profit, promuoviamo l'approccio più rispettoso a questa meraviglia naturale.",
      items: [
        "**Rimani sul sentiero**: segui i percorsi stabiliti — non crearne di nuovi, poiché ciò provoca erosione del suolo",
        "**Non lasciare tracce**: porta via tutti i rifiuti, inclusi quelli biodegradabili come bucce di frutta e fazzoletti",
        "**Non disturbare la fauna**: non nutrire né avvicinarti agli animali selvatici; proteggi in particolare il condor andino e il guanaco",
        "**Proteggi l'acqua**: il torrente nella gola è una fonte vitale per le comunità a valle — non lavare né gettare nulla al suo interno",
        "**Esplorazione silenziosa**: la gola ha un'acustica unica — mantieni basso il volume affinché tutti possano sentire i suoni della natura",
        "**Porta via solo foto**: non raccogliere rocce, piante o fossili — lascia che rimangano dove appartengono"
      ]
    },
    architecture: {
      title: "Formazione Geologica e Meraviglia Naturale",
      intro: "La Garganta del Diablo è un capolavoro scolpito dalla natura in milioni di anni. La sua struttura geologica unica non solo offre viste spettacolari, ma fornisce anche un laboratorio naturale per studiare l'orogenesi andina.",
      specs: {
        structure: { title: "Struttura del Canyon", content: "La Garganta del Diablo è un tipico slot canyon — molto più profondo che largo. Il canyon si estende per circa 500 metri, raggiunge profondità di circa 40 metri, e si restringe fino a soli 1,5 metri nel suo punto più stretto. La luce del sole filtra attraverso la fessura superiore, proiettando motivi mutevoli di luce e ombra sulle pareti di roccia rossastra e creando un'esperienza spaziale quasi surreale.\n\nUn torrente perenne scorre sul fondo del canyon. Durante la stagione delle piogge (generalmente da dicembre a marzo), il volume dell'acqua aumenta drasticamente, formando potenti cascate; nella stagione secca diventa un ruscello cristallino che i visitatori possono guadare. Le pareti sono state levigate come vetro da millenni di acqua corrente, mostrando bellissime texture aerodinamiche." },
        design: { title: "Strati di Roccia e Colori", content: "Le pareti della Garganta del Diablo espongono una magnifica sezione trasversale di strati sedimentari, che narrano centinaia di milioni di anni di storia geologica. La roccia è prevalentemente composta da strati alternati di arenaria, argillite e conglomerato, depositati dal Paleozoico al Mesozoico.\n\nLa caratteristica più sorprendente è la variazione cromatica — dal rosso intenso (ricco di ossido di ferro) all'arancione dorato (idrossidi di ferro), passando per il violetto (minerali di manganese) e il grigio pallido (carbonato di calcio) — come se la terra stessa fosse stata tinta a strati dal tempo. Questi colori sono più vividi all'alba e al tramonto, rendendo il canyon il sogno di ogni fotografo." },
        optics: { title: "Caratteristiche Idrologiche", content: "L'acqua che scorre attraverso il canyon proviene dallo scioglimento delle nevi e dalle piogge sulle alture delle Ande. È ricca di minerali e assume un sottile riflesso metallico, specialmente dopo aver attraversato gli strati di roccia rossa.\n\nLa cascata è una delle caratteristiche più iconiche della Garganta del Diablo. Durante la stagione delle piogge, l'acqua precipita da un'altezza di circa 15 metri, schiantandosi sulle rocce e riempiendo il canyon di nebbia — spesso si formano arcobaleni attraverso il canyon alla luce del sole. Anche nella stagione secca, la vista di sottili fili d'acqua che scivolano lentamente lungo le pareti di roccia levigata ha una bellezza tranquilla e meditativa tutta propria." }
      },
      plaque: {
        title: "Informazioni di Base",
        items: [
          { label: "Nome", value: "Garganta del Diablo (Gola del Diavolo)" },
          { label: "Posizione", value: "Vicino a Tilcara, Provincia di Jujuy, Argentina" },
          { label: "Età Geologica", value: "Roccia sedimentaria Paleozoico–Mesozoico" },
          { label: "Altitudine", value: "ca. 2.450 m" },
          { label: "Profondità del Canyon", value: "fino a 40 m" },
          { label: "Area Protetta", value: "Quebrada de Humahuaca (UNESCO 2003)" },
          { label: "Tipo", value: "Slot Canyon / Cascata / Meraviglia Naturale" }
        ]
      }
    },
    monuments: {
      title: "Cosa Fare alla Garganta del Diablo",
      intro: "La Garganta del Diablo unisce escursionismo nel canyon, osservazione delle cascate e paesaggi andini mozzafiato. Le seguenti esperienze sono apprezzate da amanti della natura, fotografi e viaggiatori d'avventura.",
      items: [
        { name: "Escursione e Guado nel Canyon", description: "Segui il sentiero lungo il fondo del canyon, guadando il torrente mentre le pareti di roccia si stringono intorno a te. Guarda verso l'alto, verso il nastro di cielo — l'effetto slot canyon è davvero imponente. Il suono dell'acqua che scorre, il canto degli uccelli che riecheggia e la brezza fresca sul viso rendono questo il modo più intimo per connettersi con la natura." },
        { name: "Osservazione della Cascata e Fotografia", description: "Durante la stagione delle piogge (dicembre–marzo), la cascata della Garganta del Diablo è al suo massimo splendore. Una cortina d'acqua tuona da oltre dieci metri, riempiendo il canyon di nebbia. Spesso si formano arcobaleni sopra la cascata — il sogno di ogni fotografo. Porta protezione impermeabile per la tua attrezzatura fotografica." },
        { name: "Birdwatching e Condor Andini", description: "Le scogliere della Garganta del Diablo sono la casa del condor andino, la cui apertura alare di tre metri lo rende il vero re dei cieli andini. Porta un binocolo e potrai anche vedere fenicotteri andini e numerose specie di colibrì che sfruttano le correnti termiche del canyon." },
        { name: "Viste Panoramiche del Canyon", description: "Dal terreno elevato all'ingresso del canyon, l'intera Quebrada de Humahuaca si dispiega in un panorama mozzafiato. Strato dopo strato di montagne multicolori brillano alla luce del sole, mentre la fessura scura della Garganta del Diablo taglia il primo piano — in momenti come questo, capisci veramente perché questo paesaggio è Patrimonio dell'Umanità." }
      ]
    },
    contrast: {
      title: "La Danza Eterna dell'Acqua e della Pietra",
      intro: "La magia della Garganta del Diablo risiede nel profondo dialogo tra l'acqua e la pietra nel corso di milioni di anni. L'acqua morbida, con implacabile persistenza, ha scolpito la roccia dura fino a creare uno spettacolo che toglie il fiato. Due immagini catturano la maestosità di questa forza naturale.",
      before: "Torrente nella Roccia",
      after: "Panorama del Canyon"
    },
    visiting: {
      title: "Pianifica la Tua Visita",
      intro: "La Garganta del Diablo è aperta al pubblico tutto l'anno. Si consiglia una visita di mezza giornata per esplorarla adeguatamente. Le seguenti informazioni ti aiutano a pianificare con serenità.",
      hours: { title: "Orari", content: "Tutti i giorni: **08:00–18:00**\nAperto tutto l'anno (può chiudere in condizioni meteorologiche estreme)\nSi raccomandano visite mattutine per la migliore luce e per evitare possibili temporali pomeridiani.", note: "Gli orari possono variare in base alla stagione e al meteo; consulta il centro informazioni turistiche locale prima della visita." },
      price: { title: "Biglietto", content: "L'ingresso è a pagamento; il prezzo esatto è esposto in loco. I residenti argentini, gli studenti e gli over 65 hanno solitamente tariffe ridotte.\nIl ricavato finanzia la manutenzione dei sentieri e la conservazione ecologica.", note: "Porta contanti (pesos argentini), poiché le carte potrebbero non essere accettate in zone remote." },
      duration: { title: "Durata Consigliata", content: "Escursione nel canyon andata e ritorno + foto: circa **2–3 ore**.\nEsplorazione approfondita + birdwatching + foto panoramiche: **4–5 ore**.", note: "Combina con il paese di Tilcara, il Cerro de los Siete Colores (Purmamarca) e la Quebrada de Humahuaca per un viaggio naturalistico di 2–3 giorni nel nord-ovest." },
      tips: { title: "Consigli e Raccomandazioni", items: [
        "**Acclimatamento all'altitudine**: il canyon è a ~2.450m. Prendila con calma e bevi molta acqua",
        "**Protezione solare indispensabile**: il sole andino è intenso in quota — usa crema solare ad alto fattore, occhiali da sole e cappello a tesa larga",
        "**Scarpe impermeabili**: dovrai guadare il torrente — scarpe da trekking impermeabili e antiscivolo sono essenziali",
        "**Idratazione**: il clima d'alta quota è molto secco; porta almeno 1 litro d'acqua a persona",
        "**Proteggi l'attrezzatura**: la nebbia della cascata può essere intensa — porta sacche impermeabili per fotocamere e telefoni",
        "**Controlla il meteo**: possono verificarsi piene improvvise durante la stagione delle piogge (dic–mar); controlla sempre le previsioni prima di uscire"
      ] },
      essentials: [
        { icon: "🫁", title: "Altitudine", text: "A ~2.450m, prendila con calma all'arrivo, bevi abbondante acqua e mastica coca per alleviare i sintomi." },
        { icon: "☀️", title: "Protezione solare", text: "Il sole andino è estremo — indossa occhiali da sole, cappello a tesa larga e crema solare ad alto fattore." },
        { icon: "👟", title: "Scarpe impermeabili", text: "Dovrai guadare il torrente del canyon — scarpe da trekking impermeabili sono indispensabili." },
        { icon: "💧", title: "Idratazione", text: "Il clima d'alta quota è molto secco; porta almeno 1 litro d'acqua a persona." }
      ]
    },
    transportation: {
      title: "Come Arrivare",
      airport: { title: "✈️ Dalla Capitale / Aeroporto di Jujuy", content: "L'aeroporto più vicino è l'Aeroporto Internazionale Gobernador Horacio Guzmán (JUJ), a circa 113 km da Tilcara. L'Aeroporto di Salta (SLA) è un'alternativa, a circa 210 km.", options: [
        { name: "Auto propria / a noleggio (Consigliato)", price: "ca. 1,5 ore", time: "113 km", steps: ["Dall'aeroporto di Jujuy prendere la Ruta Nacional 9 (RN-9) verso nord", "Percorrere la Quebrada de Humahuaca passando per Volcán, Tumbaya e altri villaggi", "Arrivare a Tilcara e seguire le indicazioni per l'ingresso della Garganta del Diablo"] },
        { name: "Transfer privato (aeroporto o città)", price: "ca. 1,5–2 ore", time: "≈113 km", steps: ["Prenota un transfer da JUJ o da San Salvador de Jujuy", "Viaggio diretto fino a Tilcara (con eventuali soste panoramiche)", "Da Tilcara prosegui fino all'ingresso del sentiero"] },
        { name: "Taxi/Remís + coincidenza in autobus", price: "ca. 2–3 ore (con cambio)", time: "JUJ → terminal → Tilcara", steps: ["Taxi o Remís da JUJ al terminal autobus di San Salvador de Jujuy", "Acquista un biglietto per Tilcara (orari variabili)", "Da Tilcara: taxi/Remís oppure a piedi fino all'inizio del sentiero"] }
      ]},
      publicTransport: {
        title: "🚌 Autobus a lunga percorrenza / Trasporto pubblico",
        content: "Se non guidi, in genere si raggiunge Tilcara in autobus e si completa l’ultimo tratto (circa 5 km) fino all’ingresso. Gli orari possono variare: verifica in terminal.",
        options: [
          {
            name: "San Salvador de Jujuy → Tilcara (autobus)",
            description: "Linea regolare dalla capitale provinciale a Tilcara.",
            steps: ["Raggiungi il terminal autobus di San Salvador de Jujuy", "Acquista un biglietto per Tilcara (secondo disponibilità)", "Da Tilcara: taxi/Remís oppure camminata fino all’ingresso"]
          },
          {
            name: "Salta → Tilcara (autobus)",
            description: "Utile se arrivi via Salta o combini itinerari nel nord-ovest.",
            steps: ["Raggiungi il terminal autobus di Salta", "Acquista un biglietto per Tilcara (diretto o con fermate)", "Da Tilcara completa l’ultimo tratto fino all’ingresso"]
          },
          {
            name: "Tilcara → ingresso (ultimo tratto)",
            description: "L’ingresso dista circa 5 km e la strada è in gran parte sterrata.",
            steps: ["Taxi/Remís fino al parcheggio e all’inizio del sentiero", "In alternativa, cammina (≈1 ora) o usa la bici se le condizioni lo permettono", "Entra seguendo la segnaletica sul posto"]
          }
        ]
      },
      city: { title: "🏘️ Dal Paese di Tilcara", content: "La Garganta del Diablo dista circa 5 km da Tilcara. Si può raggiungere a piedi (ca. 1 ora), in bicicletta o in taxi. Alcuni operatori turistici offrono anche escursioni guidate in 4x4.", steps: ["Dalla piazza principale di Tilcara seguire le indicazioni per la Garganta del Diablo", "Seguire la strada sterrata per circa 5 km", "Arrivare al parcheggio e all'inizio del sentiero"] },
      tips: { title: "Trasporti e Altitudine", items: [
        "**Altitudine**: Tilcara è a ~2.450m — conviene acclimatarsi per mezza giornata prima di fare l'escursione nel canyon",
        "San Salvador de Jujuy dista ~85 km da Tilcara (≈1 ora in auto)",
        "La Ruta Nacional 9 (RN-9) è in buone condizioni e il paesaggio è spettacolare — uno dei percorsi più panoramici dell'Argentina",
        "Autobus diretti collegano la città di Salta a Tilcara (ca. 3,5–4 ore)",
        "Combina con Purmamarca (Cerro de los Siete Colores), Humahuaca e Iruya per un itinerario di più giorni"
      ] }
    },
    gallery: { title: "Galleria Fotografica", viewMore: "Vedi Altre Foto su Google Maps", categories: [ { key: "gorge", label: "Canyon" }, { key: "waterfall", label: "Cascate" }, { key: "rock", label: "Texture di Roccia" }, { key: "panorama", label: "Panorami" } ] },
    reviews: {
      title: "Recensioni dei Visitatori ed Esplorazione dei Dintorni",
      subtitle: "Voci dalla Garganta del Diablo: Testimonianze Reali da Google Maps",
      viewMore: "Vedi Altre Recensioni su Google Maps",
      nearbyTitle: "Attrazioni Vicine che Vale la Pena Visitare",
      nearbyIntro: "Dopo aver esplorato la Garganta del Diablo, puoi visitare facilmente le seguenti destinazioni vicine:",
      nearbyItems: [
        { name: "Cerro de los Siete Colores (Collina dei Sette Colori)", description: "Situato a Purmamarca, a circa 25 km da Tilcara. Famoso per le sue fasce di colori rosso, arancione, giallo, verde e porpora — uno dei punti fotografici più iconici del nord-ovest argentino." },
        { name: "Pucará de Tilcara (Fortezza Preincaica)", description: "Sito archeologico preincaico a Tilcara, a circa 2.465 m di altitudine. Questa fortezza di pietra millenaria domina la Quebrada de Humahuaca ed è un luogo magnifico per conoscere la cultura indigena andina." },
        { name: "Salinas Grandes (Grandi Saline)", description: "Enorme distesa di sale al confine tra Jujuy e Salta, a circa 3.450 m di altitudine. La crosta bianca abbagliante contro un cielo blu cobalto crea un paesaggio surreale — una delle meraviglie naturali più impressionanti dell'altopiano andino." }
      ]
    },
    faq: { title: "Domande Frequenti", subtitle: "Scopri di Più sulla Garganta del Diablo", items: [
      { question: "Cosa significa 'Garganta del Diablo'?", answer: "'Garganta del Diablo' significa 'Gola del Diavolo' in spagnolo. Il nome deriva dalla forma unica del canyon — una fessura stretta e profonda che ricorda una gola gigante — e dal fragore tonante dell'acqua delle piene che riecheggia nel canyon, che gli abitanti paragonano al ruggito di un demone. Il folclore locale narra anche una tragica storia d'amore interculturale che aggiunge sfumature romantiche e misteriose al nome." },
      { question: "Quanto tempo richiede la visita alla Garganta del Diablo?", answer: "L'escursione nel canyon andata e ritorno richiede circa 2–3 ore (incluse soste per foto e punti panoramici). Se prevedi di esplorare in profondità, fare birdwatching o fotografia, calcola 4–5 ore. L'orario è tutti i giorni 08:00–18:00; le visite mattutine offrono la luce migliore." },
      { question: "Cosa devo tenere presente durante la visita?", answer: "Il canyon è a ~2.450m; prenditi tempo per acclimatarti. Il sole andino è estremo — usa una buona protezione solare. Dovrai guadare il torrente, quindi indossa scarpe da trekking impermeabili e antiscivolo. Porta almeno 1 litro d'acqua a persona. Possono verificarsi piene improvvise nella stagione delle piogge (dic–mar) — controlla sempre le previsioni. Porta via tutti i rifiuti e aiuta a proteggere questo fragile ecosistema." },
      { question: "Come arrivo alla Garganta del Diablo da Buenos Aires?", answer: "Vola da Buenos Aires all'Aeroporto Internazionale di Jujuy (JUJ, ≈2 ore), poi guida o prendi un autobus sulla Ruta Nacional 9 verso nord per circa 113 km (1,5 ore) fino a Tilcara. La Garganta del Diablo dista circa 5 km da Tilcara — puoi prendere un taxi, andare in bicicletta o camminare. In alternativa, vola a Salta (SLA) e viaggia per circa 210 km (3,5–4 ore)." },
      { question: "È la stessa Garganta del Diablo delle Cascate dell'Iguazú?", answer: "No, sono luoghi diversi. L'Argentina ha due elementi naturali famosi chiamati 'Garganta del Diablo': l'enorme cascata delle Cascate dell'Iguazú (al confine con il Brasile, nel nord-est), e questo slot canyon d'alta quota vicino a Tilcara (a Jujuy, nel nord-ovest). Entrambi sono meraviglie naturali, ma di tipi completamente diversi — una è una cascata tropicale di bassa quota e l'altra uno slot canyon di regione arida d'alta quota." }
    ]},
    location: { title: "Posizione", address: "Paraje Garganta del Diablo\nTilcara, Provincia di Jujuy\nArgentina", openMaps: "Vedi su Google Maps" },
    footer: { callToAction: "La Garganta del Diablo è un tesoro naturale della Quebrada de Humahuaca, Patrimonio dell'Umanità — una meraviglia scolpita dalla natura in milioni di anni. Unisciti a noi per proteggere questo fragile ecosistema del canyon affinché il dialogo eterno tra l'acqua e la pietra continui per le generazioni a venire.", text: "© 2026 Guida di Garganta del Diablo · Tutti i diritti riservati.\nQuesto sito è una guida educativa indipendente senza scopo di lucro dedicata a diffondere informazioni accurate sulla Garganta del Diablo. Non siamo affiliati con il governo argentino né con alcuna autorità ufficiale.", made: "Questo è un progetto educativo indipendente non profit, creato per esploratori della natura, escursionisti e viaggiatori culturali.", linksTitle: "Link Amici", links: LINKS_BY_LOCALE.it },
    siteMap: {
      title: "Mappa del Sentiero",
      intro: "Passa il cursore (o tocca) sui marcatori della mappa per esplorare le aree chiave della Garganta del Diablo e dei suoi dintorni.",
      hint: "Passa il cursore · Tocca per fissare",
      cta: "Vedi la mappa completa del sentiero",
      zones: [
        { key: "entrada", name: "Ingresso del Sentiero", desc: "Il punto di partenza dell'escursione nel canyon, con parcheggio, pannelli informativi e servizi igienici di base. Fai qui gli ultimi preparativi." },
        { key: "iglesia", name: "Belvedere 1 (Mirador 1)", desc: "Il primo punto panoramico principale del sentiero, con viste elevate dell'intero canyon. Uno dei luoghi migliori per la fotografia panoramica." },
        { key: "monumento", name: "Zona della Cascata", desc: "Sede dell'iconica cascata della Garganta del Diablo. Più spettacolare durante la stagione delle piogge, con frequenti arcobaleni sul canyon." },
        { key: "corrales", name: "Passaggio Stretto (Paso Estrecho)", desc: "La sezione più stretta del canyon, dove le pareti quasi si toccano. I raggi di sole penetrano attraverso la fessura superiore, creando effetti di luce straordinari." },
        { key: "necrópolis", name: "Fine del Canyon (Final del Cañón)", desc: "La fine del sentiero, dove il canyon si apre improvvisamente. Da qui si gode di viste panoramiche sull'intera Quebrada de Humahuaca." }
      ]
    },
    itinerary: {
      title: "Itinerario Suggerito",
      intro: "Mezza giornata basta per una visita gratificante. Usa la linea del tempo come guida e adattala al tuo ritmo e al meteo.",
      steps: [
        { time: "08:00", title: "Arrivo all'inizio del sentiero", text: "Arriva presto per la migliore luce mattutina. Applica la crema solare, idratati e inizia l'escursione." },
        { time: "08:30", title: "Primo Belvedere", text: "Sali al belvedere per un panorama completo della Garganta del Diablo. Le pareti di roccia rossa sono particolarmente suggestive con la luce del mattino." },
        { time: "09:30", title: "Zona della Cascata", text: "Scendi sul fondo del canyon e vivi la cascata da vicino. Spesso si vedono arcobaleni nella nebbia." },
        { time: "10:30", title: "Passaggio Stretto", text: "Entra nella sezione più stretta del canyon, dove le pareti si stringono e il cielo diventa un nastro." },
        { time: "12:00", title: "Ritorno a Tilcara", text: "Torna al paese e goditi un pranzo andino, concludendo la tua mezza giornata di avventura naturale." }
      ]
    },
    ctaBand: {
      title: "Pianifica il Tuo Viaggio alla Garganta del Diablo",
      subtitle: "Dalla preparazione per l'escursione all'esplorazione dei dintorni, rendi la tua visita al canyon rilassata e approfondita.",
      buttons: ["Orari e Biglietti", "Guida alla Sicurezza Escursionistica", "Vedi Posizione su Maps"]
    }
  }
};
