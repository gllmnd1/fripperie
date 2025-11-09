import Head from 'next/head'

export default function Seo({ title = 'La Fripperie — Vintage & Curated', description = 'Pièces vintage sélectionnées avec soin. Mode circulaire et esthétisme intemporel.', url = 'https://votre-site-vercel.app', image = '/images/placeholder-dress.svg' }){
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="icon" href="/favicon.svg" />
    </Head>
  )
}
