import '@/styles/globals.css'
import type { AppProps } from 'next/app'
export const reportWebVitals = (metrics: any) => console.log(metrics) //기본적으로 제공되는 성능 호출 메서드
// export const reportWebVitals = (metrics: any) => sendToGoogleAnalytics(metrics) //외부 성능 지표와도 연동 가능

export default function App({ Component, pageProps }: AppProps) {
  //최상위 공통 레이아웃 구성할 때, 작성하면 좋을 듯
  return <Component {...pageProps} />
}
