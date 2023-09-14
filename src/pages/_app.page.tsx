import { Footer } from '@/components/Footer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BellaSkin | Clínica de Estética e Beleza</title>
      </Head>

      <div className="min-h-screen">
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  )
}
