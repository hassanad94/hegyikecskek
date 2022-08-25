// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="stylesheet" href="https://use.typekit.net/pkc7ths.css"/>
        <link href="//db.onlinewebfonts.com/c/8be4a2f403c2dc27187d892cca388e24?family=Britannic+Bold" rel="stylesheet" type="text/css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument