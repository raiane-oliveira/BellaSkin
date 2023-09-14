import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />

        <meta name="title" content="BellaSkin | Clínica Estética" />
        <meta
          name="description"
          content="Descubra o segredo de uma pele radiante com nossos tratamentos e cuidados especializados."
        />
        <meta
          name="keywords"
          content="tratamento de unhas,design de sobrancelhas,skincare,clínica de estética,depilação,estética"
        />
        <meta name="robots" content="index, nofollow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Portuguese" />
        <meta name="author" content="Raiane Oliveira" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <body className="font-app bg-gray-neutral">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
