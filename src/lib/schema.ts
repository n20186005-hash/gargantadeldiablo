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
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'geoCoordinate', value: 'CJ4G+55 Tilcara, Jujuy' },
          { '@type': 'PropertyValue', name: 'altitude', value: 'approx. 2,450 metros' },
          { '@type': 'PropertyValue', name: 'type', value: 'Garganta natural / Cascada' },
          { '@type': 'PropertyValue', name: 'worldHeritage', value: 'Quebrada de Humahuaca (UNESCO 2003)' },
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
        '@type': 'WebSite',
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
