import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <title>Jonathan Cutrell</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
