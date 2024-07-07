import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "./layout/layout"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
