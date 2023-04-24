import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  //최상위 공통 레이아웃 구성할 때, 작성하면 좋을 듯
  return <Component {...pageProps} />
}
