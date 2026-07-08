export function generateSchema(locale: string, baseUrl: string) {
  const localUrl = `${baseUrl}/${locale}`;

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
      ? 'Garganta del Diablo en Jujuy, Argentina. Impresionante cañón natural en la Quebrada de Humahuaca, Patrimonio de la Humanidad UNESCO.'
      : locale === 'zh'
        ? '阿根廷胡胡伊省的魔鬼之喉（Garganta del Diablo），乌马瓦卡峡谷世界遗产中的壮丽天然峡谷。'
        : locale === 'it'
          ? 'Garganta del Diablo a Jujuy, Argentina. Spettacolare canyon naturale nella Quebrada de Humahuaca, Patrimonio UNESCO.'
          : 'Garganta del Diablo in Jujuy, Argentina. A stunning natural gorge in the Quebrada de Humahuaca, UNESCO World Heritage Site.';

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

  const trip = tripByLocale[locale as keyof typeof tripByLocale] || tripByLocale.en;
  const faq = faqByLocale[locale as keyof typeof faqByLocale] || faqByLocale.en;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TouristAttraction', 'Place'],
        name,
        alternateName: ['Garganta del Diablo', 'Devil\'s Throat', '魔鬼之喉', 'Gola del Diavolo'],
        description,
        url: localUrl,
        image: `${baseUrl}/gallery/garganta-del-diablo-1.jpg`,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -23.577,
          longitude: -65.383,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Paraje Garganta del Diablo',
          addressLocality: 'Tilcara',
          addressRegion: 'Jujuy',
          addressCountry: 'AR',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '08:00',
          closes: '18:00',
        },
        priceRange: 'ARS',
        isAccessibleForFree: false,
        mainEntityOfPage: localUrl,
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'geoCoordinate', value: 'CJ4G+55 Tilcara, Jujuy' },
          { '@type': 'PropertyValue', name: 'altitude', value: 'approx. 2,450 metros' },
          { '@type': 'PropertyValue', name: 'type', value: 'Garganta natural / Cascada' },
          { '@type': 'PropertyValue', name: 'worldHeritage', value: 'Quebrada de Humahuaca (UNESCO 2003)' },
          { '@type': 'PropertyValue', name: 'searchIntentDisambiguation', value: 'Not the Iguazu Falls Garganta del Diablo' },
        ],
        sameAs: [
          'https://maps.app.goo.gl/5omkpMV3k3cC52ku5',
          'https://turismo.jujuy.gob.ar/',
          'https://www.argentina.travel/',
          'https://whc.unesco.org/zh/list/1116/',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          reviewCount: '5699',
          bestRating: '5',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${localUrl}#faq`,
        url: `${localUrl}#faq`,
        inLanguage:
          locale === 'es' ? 'es-AR' : locale === 'zh' ? 'zh-CN' : locale === 'it' ? 'it-IT' : 'en-US',
        mainEntity: faq.map((item) => ({
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
        '@type': 'WebPage',
        '@id': localUrl,
        url: localUrl,
        name,
        description,
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${localUrl}#website`,
        },
        about: {
          '@id': localUrl,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${localUrl}#website`,
        url: localUrl,
        name,
        inLanguage:
          locale === 'es' ? 'es-AR' : locale === 'zh' ? 'zh-CN' : locale === 'it' ? 'it-IT' : 'en-US',
        isAccessibleForFree: true,
        publisher: {
          '@type': 'Organization',
          name: 'Garganta del Diablo Guide',
        },
      },
    ],
  };
}
