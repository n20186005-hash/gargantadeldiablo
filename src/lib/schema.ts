import { ENTITY, ENTITY_FAQ } from './entity';

export function generateSchema(locale: string, baseUrl: string) {
  const localUrl = `${baseUrl}/${locale}`;
  const attractionId = `${ENTITY.siteUrl}/#attraction`;

  const name =
    locale === 'es'
      ? 'Garganta del Diablo'
      : locale === 'zh'
        ? '魔鬼之喉（Garganta del Diablo）'
        : locale === 'it'
          ? 'Garganta del Diablo'
          : 'Garganta del Diablo';

  const description =
    locale === 'es'
      ? 'Garganta del Diablo en Tilcara, Jujuy, Argentina. Cañón natural de altura en la Quebrada de Humahuaca, Patrimonio de la Humanidad UNESCO.'
      : locale === 'zh'
        ? '阿根廷胡胡伊省蒂尔卡拉（Tilcara）的魔鬼之喉（Garganta del Diablo），乌马瓦卡峡谷世界遗产中的壮丽高海拔天然峡谷。'
        : locale === 'it'
          ? 'Garganta del Diablo a Tilcara, Jujuy, Argentina. Spettacolare gola d’alta quota nella Quebrada de Humahuaca, Patrimonio UNESCO.'
          : 'Garganta del Diablo in Tilcara, Jujuy, Argentina. A stunning high-altitude gorge in the Quebrada de Humahuaca, UNESCO World Heritage Site.';

  const faqByLocale = {
    zh: [
      {
        q: '蒂尔卡拉的魔鬼之喉和伊瓜苏的魔鬼之喉是同一个地方吗？',
        a: '不是。伊瓜苏的 Garganta del Diablo 是著名瀑布观景点，而蒂尔卡拉的 Garganta del Diablo 是胡胡伊省高海拔峡谷中的徒步目的地，两者地貌、地理位置与旅行体验都不同。',
      },
      {
        q: '游览蒂尔卡拉魔鬼之喉通常需要多久？',
        a: '常规往返徒步加拍照约需 2 至 3 小时，如加入观鸟、长时间停留或与周边遗址联动，可安排半日以上。',
      },
      {
        q: '前往蒂尔卡拉魔鬼之喉需要注意什么？',
        a: '应重点关注高海拔适应、强紫外线、防滑涉水鞋、饮水补给与雨季突发洪水风险，并遵守无痕探访原则。',
      },
    ],
    en: [
      {
        q: 'Is the Garganta del Diablo near Tilcara the same place as the one at Iguazu Falls?',
        a: 'No. Iguazu’s Garganta del Diablo is the famous waterfall viewpoint, while Tilcara’s Garganta del Diablo is a high-altitude gorge hiking destination in Jujuy. They differ in landscape, location and visitor experience.',
      },
      {
        q: 'How long does a visit to Tilcara’s Garganta del Diablo usually take?',
        a: 'A standard round-trip hike with photo stops usually takes about 2 to 3 hours. A half-day or more is preferable if you add birdwatching, longer pauses or nearby heritage stops.',
      },
      {
        q: 'What should visitors keep in mind before going?',
        a: 'Altitude acclimatisation, strong UV exposure, non-slip footwear for stream crossings, sufficient water and flash-flood awareness in the rainy season are all important, along with leave-no-trace behaviour.',
      },
    ],
    es: [
      {
        q: '¿La Garganta del Diablo de Tilcara es la misma que la de las Cataratas del Iguazú?',
        a: 'No. La de Iguazú es el famoso mirador de cataratas, mientras que la de Tilcara es una garganta de altura en Jujuy orientada al senderismo. Cambian el paisaje, la ubicación y la experiencia de visita.',
      },
      {
        q: '¿Cuánto tiempo suele demandar la visita a la Garganta del Diablo de Tilcara?',
        a: 'La caminata de ida y vuelta con paradas fotográficas suele llevar entre 2 y 3 horas. Si se suman observación de aves, pausas largas o sitios patrimoniales cercanos, conviene prever medio día o más.',
      },
      {
        q: '¿Qué conviene tener en cuenta antes de ir?',
        a: 'Es importante considerar la aclimatación a la altura, la radiación UV intensa, el calzado antideslizante para vadear, el agua suficiente y el riesgo de crecidas repentinas en época de lluvias, además de una visita sin dejar rastro.',
      },
    ],
    it: [
      {
        q: 'La Garganta del Diablo di Tilcara è la stessa dell’Iguazú?',
        a: 'No. Quella di Iguazú è il celebre punto panoramico della cascata, mentre quella di Tilcara è una gola d’alta quota in Jujuy legata all’escursionismo. Cambiano paesaggio, posizione ed esperienza di visita.',
      },
      {
        q: 'Quanto tempo richiede di solito la visita alla Garganta del Diablo di Tilcara?',
        a: 'L’escursione di andata e ritorno con soste fotografiche richiede in genere 2 o 3 ore. Se si aggiungono birdwatching, soste lunghe o siti patrimoniali vicini, è meglio prevedere almeno mezza giornata.',
      },
      {
        q: 'Cosa conviene sapere prima di partire?',
        a: 'Sono importanti l’acclimatamento alla quota, l’intensa radiazione UV, scarpe antiscivolo per i guadi, una buona scorta d’acqua e l’attenzione alle piene improvvise nella stagione delle piogge, oltre a un comportamento senza tracce.',
      },
    ],
  } as const;

  const tripByLocale = {
    zh: {
      name: '蒂尔卡拉魔鬼之喉徒步路线',
      description: '从蒂尔卡拉镇外步道入口前往高海拔峡谷与瀑布的半日徒步路线。',
      difficulty: '中等',
      duration: 'PT3H',
      distance: '约 5 公里（镇外入口段不含接驳）',
    },
    en: {
      name: 'Tilcara Garganta del Diablo Hiking Route',
      description: 'A half-day hiking route from the trailhead outside Tilcara into the high-altitude gorge and waterfall corridor.',
      difficulty: 'Moderate',
      duration: 'PT3H',
      distance: 'Approx. 5 km from the outer access point',
    },
    es: {
      name: 'Ruta de senderismo a la Garganta del Diablo de Tilcara',
      description: 'Recorrido de medio día desde el acceso exterior de Tilcara hacia la garganta de altura y la cascada.',
      difficulty: 'Moderada',
      duration: 'PT3H',
      distance: 'Aprox. 5 km desde el acceso exterior',
    },
    it: {
      name: 'Percorso escursionistico alla Garganta del Diablo di Tilcara',
      description: 'Itinerario di mezza giornata dall’accesso esterno di Tilcara fino alla gola d’alta quota e alla cascata.',
      difficulty: 'Moderata',
      duration: 'PT3H',
      distance: 'Circa 5 km dal punto di accesso esterno',
    },
  } as const;

  /**
   * HowTo：精准覆盖 GSC 高意图查询 `camino a la garganta del diablo`
   *（用户要的是「从蒂尔卡拉镇怎么走到峡谷」这一具体路径）
   */
  const howToByLocale = {
    zh: {
      name: '蒂尔卡拉至魔鬼之喉徒步路线（Camino a la Garganta del Diablo）',
      description:
        '从蒂尔卡拉镇中心步行前往魔鬼之喉的完整路线：约 5 公里土路抵达步道入口，购票后沿峡谷步道下行至瀑布。',
      supply: ['饮用水（每人至少 1 升）', '防晒霜、遮阳帽与墨镜', '防滑徒步鞋', '阿根廷比索现金（用于购票）'],
      tool: ['涉水用防水鞋', '手机与相机的防水袋'],
      steps: [
        { name: '从蒂尔卡拉镇中心出发', text: '从蒂尔卡拉主广场沿指示牌方向，前往 Paraje Garganta del Diablo。' },
        { name: '沿土路步行约 5 公里', text: '到景区入口约 5 公里（步行约 1 小时），缓坡上行；也可骑行或搭乘 Remís 出租车前往。' },
        { name: '到达入口并购买门票', text: '在入口停车场购票进入步道，票价以现场公示为准，建议携带现金。' },
        { name: '沿峡谷步道下行', text: '步道在岩壁之间下行，途中有涉水路段；请穿防滑鞋并注意脚下。' },
        { name: '抵达瀑布后原路返回', text: '峡谷底部为瀑布与天然观景点，返回走同一步道，往返约 2–3 小时。' },
      ],
    },
    en: {
      name: 'Trail to the Garganta del Diablo from Tilcara',
      description:
        'The full walking route from Tilcara town centre to the Garganta del Diablo: about 5 km of dirt road to the trailhead, then a descent into the gorge to the waterfall.',
      supply: ['Water (at least 1 litre per person)', 'Sunscreen, cap and sunglasses', 'Grippy hiking shoes', 'Cash in Argentine pesos for the entrance fee'],
      tool: ['Waterproof footwear for the stream crossings', 'Waterproof bag for your phone or camera'],
      steps: [
        { name: 'Set off from Tilcara town centre', text: 'From Tilcara’s main square, follow the signposted dirt road towards Paraje Garganta del Diablo.' },
        { name: 'Walk the 5 km dirt road', text: 'The approach is about 5 km (roughly 1 hour on foot) with a gentle climb; you can also cycle or take a remís taxi.' },
        { name: 'Arrive at the entrance and pay the fee', text: 'The entrance fee is paid at the trailhead car park; the price is displayed on site and cash is recommended.' },
        { name: 'Descend the gorge trail', text: 'The trail drops between rock walls and includes stream-crossing sections; wear non-slip footwear and take care.' },
        { name: 'Reach the waterfall and walk back', text: 'The waterfall and natural viewpoints sit at the bottom of the gorge; return by the same trail. Round trip: 2–3 hours.' },
      ],
    },
    es: {
      name: 'Camino a la Garganta del Diablo desde Tilcara',
      description:
        'Recorrido completo a pie desde el centro de Tilcara hasta la Garganta del Diablo: unos 5 km de camino de tierra hasta el acceso y luego descenso por el sendero del cañón hasta la cascada.',
      supply: ['Agua (mínimo 1 litro por persona)', 'Protector solar, gorra y anteojos de sol', 'Calzado de trekking con buen agarre', 'Efectivo en pesos para la entrada'],
      tool: ['Calzado impermeable para los tramos de vadeo', 'Bolsa impermeable para el teléfono o la cámara'],
      steps: [
        { name: 'Salí desde el centro de Tilcara', text: 'Desde la plaza principal de Tilcara seguí el camino de tierra señalizado hacia el Paraje Garganta del Diablo.' },
        { name: 'Caminá los 5 km de camino de tierra', text: 'El trayecto hasta el acceso es de unos 5 km (aproximadamente 1 hora a pie) en subida suave; también se puede hacer en bicicleta o en taxi/remís.' },
        { name: 'Llegá al acceso y aboná la entrada', text: 'La entrada se abona en el estacionamiento del inicio del sendero; el precio se exhibe en el lugar y conviene llevar efectivo.' },
        { name: 'Descendé por el sendero del cañón', text: 'El sendero baja entre paredes de roca con tramos de vadeo; usá calzado antideslizante y avanzá con cuidado.' },
        { name: 'Llegá a la cascada y regresá', text: 'En el fondo del cañón están la cascada y los miradores naturales; el regreso es por el mismo sendero. Ida y vuelta: 2–3 horas.' },
      ],
    },
    it: {
      name: 'Sentiero alla Garganta del Diablo da Tilcara',
      description:
        'Percorso completo a piedi dal centro di Tilcara alla Garganta del Diablo: circa 5 km di strada sterrata fino all’ingresso, poi discesa nel sentiero della gola fino alla cascata.',
      supply: ['Acqua (almeno 1 litro a persona)', 'Crema solare, cappello e occhiali da sole', 'Scarpe da trekking con buon grip', 'Contanti in pesos per il biglietto'],
      tool: ['Calzature impermeabili per i tratti di guado', 'Sacca impermeabile per telefono o fotocamera'],
      steps: [
        { name: 'Parti dal centro di Tilcara', text: 'Dalla piazza principale di Tilcara segui la strada sterrata indicata verso il Paraje Garganta del Diablo.' },
        { name: 'Percorri i 5 km di sterrato', text: 'L’avvicinamento è di circa 5 km (all’incirca 1 ora a piedi) in leggera salita; si può anche andare in bici o in taxi/remís.' },
        { name: 'Arriva all’ingresso e paga il biglietto', text: 'Il biglietto si paga al parcheggio dell’inizio del sentiero; il prezzo è esposto in loco e conviene avere contanti.' },
        { name: 'Scendi lungo il sentiero della gola', text: 'Il sentiero scende tra pareti di roccia con tratti di guado; usa calzature antiscivolo e procedi con cautela.' },
        { name: 'Raggiungi la cascata e torna indietro', text: 'Sul fondo della gola si trovano la cascata e i punti panoramici; il ritorno è sullo stesso sentiero. Andata e ritorno: 2–3 ore.' },
      ],
    },
  } as const;

  const touristTypeByLocale = {
    zh: ['徒步爱好者', '自然探索者', '深度文化旅行者'],
    en: ['hikers', 'nature travellers', 'cultural travellers'],
    es: ['senderistas', 'viajeros de naturaleza', 'viajeros culturales'],
    it: ['escursionisti', 'viaggiatori naturalistici', 'viaggiatori culturali'],
  } as const;

  const breadcrumbByLocale = {
    zh: ['首页', '蒂尔卡拉', '胡胡伊省', '阿根廷'],
    en: ['Home', 'Tilcara', 'Jujuy', 'Argentina'],
    es: ['Inicio', 'Tilcara', 'Jujuy', 'Argentina'],
    it: ['Home', 'Tilcara', 'Jujuy', 'Argentina'],
  } as const;

  const inLanguage =
    locale === 'es' ? 'es-AR' : locale === 'zh' ? 'zh-CN' : locale === 'it' ? 'it-IT' : 'en-US';

  const trip = tripByLocale[locale as keyof typeof tripByLocale] || tripByLocale.en;
  const faq = faqByLocale[locale as keyof typeof faqByLocale] || faqByLocale.en;
  const extraFaq = ENTITY_FAQ[locale as keyof typeof ENTITY_FAQ] || ENTITY_FAQ.en;
  const breadcrumb = breadcrumbByLocale[locale as keyof typeof breadcrumbByLocale] || breadcrumbByLocale.en;
  const howTo = howToByLocale[locale as keyof typeof howToByLocale] || howToByLocale.es;
  const touristType = [...(touristTypeByLocale[locale as keyof typeof touristTypeByLocale] || touristTypeByLocale.es)];
  const allFaq = [...faq, ...extraFaq];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TouristAttraction', 'Place'],
        '@id': attractionId,
        name,
        alternateName: [
          'Garganta del Diablo',
          'Garganta del Diablo de Tilcara',
          "Devil's Throat",
          '魔鬼之喉',
          'Gola del Diavolo',
          `${ENTITY.city} ${ENTITY.fullName}`,
        ],
        description,
        url: ENTITY.siteUrl,
        mainEntityOfPage: localUrl,
        image: [
          `${baseUrl}/gallery/garganta-del-diablo-1.jpg`,
          `${baseUrl}/gallery/garganta-del-diablo-6.jpg`,
          `${baseUrl}/gallery/garganta-del-diablo-20.jpg`,
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: ENTITY.latitude,
          longitude: ENTITY.longitude,
        },
        hasMap: ENTITY.mapsShareUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ENTITY.fullName,
          addressLocality: ENTITY.city,
          addressRegion: ENTITY.province,
          postalCode: ENTITY.postalCode,
          addressCountry: ENTITY.countryCode,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '08:00',
          closes: '18:00',
        },
        priceRange: 'ARS',
        isAccessibleForFree: false,
        touristType,
        containedInPlace: [
          {
            '@type': 'City',
            name: ENTITY.city,
            address: {
              '@type': 'PostalAddress',
              addressLocality: ENTITY.city,
              addressRegion: ENTITY.province,
              addressCountry: ENTITY.countryCode,
            },
          },
          {
            '@type': 'Place',
            name: 'Quebrada de Humahuaca',
            description: 'UNESCO World Heritage Site (2003), Jujuy, Argentina',
            sameAs: ENTITY.unescoUrl,
          },
        ],
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'geoCoordinate', value: ENTITY.plusCode },
          { '@type': 'PropertyValue', name: 'altitude', value: 'approx. 2,450 metros' },
          { '@type': 'PropertyValue', name: 'type', value: 'Garganta natural / Cascada' },
          { '@type': 'PropertyValue', name: 'worldHeritage', value: 'Quebrada de Humahuaca (UNESCO 2003)' },
          { '@type': 'PropertyValue', name: 'searchIntentDisambiguation', value: 'Not the Iguazu Falls Garganta del Diablo' },
          { '@type': 'PropertyValue', name: 'nearbyLandmark', value: ENTITY.landmark1 },
          { '@type': 'PropertyValue', name: 'nearbyLandmark', value: ENTITY.landmark2 },
        ],
        sameAs: [ENTITY.mapsShareUrl, ENTITY.govtTourismUrl, ENTITY.nationalTourismUrl, ENTITY.unescoUrl],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: String(ENTITY.rating),
          reviewCount: String(ENTITY.reviewCount),
          bestRating: '5',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${ENTITY.siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: breadcrumb[0],
            item: localUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `${ENTITY.fullName} (${ENTITY.city})`,
            item: localUrl,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${ENTITY.city}, ${ENTITY.province}`,
            item: localUrl,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: `${ENTITY.province}, ${ENTITY.country}`,
            item: localUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${localUrl}#faq`,
        url: `${localUrl}#faq`,
        inLanguage,
        mainEntity: allFaq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
      {
        '@type': 'TouristTrip',
        '@id': `${localUrl}#trail`,
        name: trip.name,
        description: trip.description,
        touristType:
          locale === 'zh'
            ? ['徒步爱好者', '深度旅行者']
            : locale === 'es'
              ? ['senderistas', 'viajeros de profundidad']
              : locale === 'it'
                ? ['escursionisti', 'viaggiatori lenti']
                : ['hikers', 'slow travellers'],
        itinerary: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name:
                locale === 'zh'
                  ? '步道入口'
                  : locale === 'es'
                    ? 'Inicio del sendero'
                    : locale === 'it'
                      ? 'Inizio del sentiero'
                      : 'Trailhead',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name:
                locale === 'zh'
                  ? '峡谷段与涉水区'
                  : locale === 'es'
                    ? 'Tramo de quebrada y vadeo'
                    : locale === 'it'
                      ? 'Tratto della gola e guadi'
                      : 'Gorge and stream-crossing section',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name:
                locale === 'zh'
                  ? '瀑布终点'
                  : locale === 'es'
                    ? 'Sector de la cascada'
                    : locale === 'it'
                      ? 'Zona della cascata'
                      : 'Waterfall sector',
            },
          ],
        },
        provider: {
          '@type': 'Organization',
          name: 'Garganta del Diablo Guide',
          url: ENTITY.siteUrl,
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'ARS',
        },
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'difficulty', value: trip.difficulty },
          { '@type': 'PropertyValue', name: 'estimatedDuration', value: trip.duration },
          { '@type': 'PropertyValue', name: 'distance', value: trip.distance },
          {
            '@type': 'PropertyValue',
            name: 'safetyFocus',
            value:
              locale === 'zh'
                ? '高海拔、强紫外线、雨季洪水与涉水路段'
                : locale === 'es'
                  ? 'altura, radiación UV, crecidas estacionales y vadeo'
                  : locale === 'it'
                    ? 'quota, UV intenso, piene stagionali e guadi'
                    : 'altitude, strong UV, seasonal floods and stream crossings',
          },
        ],
      },
      {
        /**
         * HowTo：精准匹配 GSC 高意图查询「camino a la garganta del diablo」
         * 承载「从蒂尔卡拉镇怎么走到峡谷」这一具体交通/徒步意图
         */
        '@type': 'HowTo',
        '@id': `${localUrl}#camino-a-la-garganta`,
        url: `${localUrl}#transportation`,
        name: howTo.name,
        description: howTo.description,
        inLanguage,
        /** 从蒂尔卡拉镇中心出发，往返约 2–3 小时 */
        totalTime: 'PT3H',
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'startingPoint',
            value: `${ENTITY.city}, ${ENTITY.province}, ${ENTITY.country}`,
          },
          {
            '@type': 'PropertyValue',
            name: 'accessModes',
            value:
              locale === 'zh'
                ? '步行、自驾、骑行或 Remís 出租车'
                : locale === 'es'
                  ? 'a pie, en auto, en bicicleta o en taxi/remís'
                  : locale === 'it'
                    ? 'a piedi, in auto, in bici o in taxi/remís'
                    : 'on foot, by car, by bike or by remís taxi',
          },
          { '@type': 'PropertyValue', name: 'distanceToTrailhead', value: '5 km' },
          { '@type': 'PropertyValue', name: 'altitude', value: 'approx. 2,450 metros' },
          { '@type': 'PropertyValue', name: 'map', value: ENTITY.mapsShareUrl },
        ],
        supply: howTo.supply.map((s: string) => ({ '@type': 'HowToSupply', name: s })),
        tool: howTo.tool.map((s: string) => ({ '@type': 'HowToTool', name: s })),
        step: howTo.steps.map((s: { name: string; text: string }, i: number) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
          url: `${localUrl}#transportation`,
        })),
      },
      {
        '@type': 'WebPage',
        '@id': localUrl,
        url: localUrl,
        name,
        description,
        inLanguage,
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${ENTITY.siteUrl}/#website`,
        },
        about: {
          '@id': attractionId,
        },
        breadcrumb: {
          '@id': `${ENTITY.siteUrl}/#breadcrumb`,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${ENTITY.siteUrl}/#website`,
        url: ENTITY.siteUrl,
        name,
        inLanguage,
        isAccessibleForFree: true,
        publisher: {
          '@type': 'Organization',
          '@id': `${ENTITY.siteUrl}/#organization`,
          name: 'Garganta del Diablo Guide',
          url: ENTITY.siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${ENTITY.siteUrl}/icon.svg`,
          },
        },
      },
    ],
  };
}
