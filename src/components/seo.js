import React from 'react';
import { Helmet } from 'react-helmet';
// import { useStaticQuery, graphql } from 'gatsby';

function SEO({ meta, modal, menu }) {
  // Получаем данные с CMS
  // const query = useStaticQuery(ctx);
  // Трансформация данных
  // const data = localeHandler(query, lang);
  // const context = data?.allDatoCmsSite?.globalSeo;

  let active;
  if (modal) {
    active = true;
  } else if (menu) {
    active = true;
  } else {
    active = false;
  }

  return (
    <Helmet>
      <html lang="fi-FI" amp />
      {/* Primary Meta Tags */}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta name="title" content={meta?.title} />
      <meta name="description" content={meta?.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta?.url} />
      <meta property="og:title" content={meta?.title} />
      <meta property="og:description" content={meta?.description} />
      <meta property="og:image" content={meta?.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta?.url} />
      <meta property="twitter:title" content={meta?.title} />
      <meta property="twitter:description" content={meta?.description} />
      <meta property="twitter:image" content={meta?.image} />

      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <link
        rel="stylesheet preload prefetch preconnect dns-prefetch"
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap"
        as="style"
        type="text/css"
      />
      <title>{meta?.title}</title>
      <body className={active ? `modal-show` : ''} />
    </Helmet>
  );
}

export default SEO;

// GrapQL запрос
// const ctx = graphql`
//   query {
//     allDatoCmsSite {
//       nodes {
//         locale
//         globalSeo {
//           fallbackSeo {
//             description
//           }
//           siteName
//         }
//       }
//     }
//   }
// `;
