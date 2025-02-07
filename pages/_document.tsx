import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures of SSAMDI"
          />
          <meta property="og:site_name" content="ssamdi.vercel.app" />
          <meta
            property="og:description"
            content="See pictures of SSAMDI"
          />
          <meta property="og:title" content="SSAMDI THE GALLERY" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SSAMDI THE GALLERY" />
          <meta
            name="twitter:description"
            content="See pictures of SSAMDI"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
