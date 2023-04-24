import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  //Main: 페이지 컴포넌트 랜더링
  //NextScript: 클라이언트 전송 페이지나 리액트 하이드레이션이 이루어짐, custom javascript 파일들이 로드되는데 사용됨, 페이지전환, 데이터 가져오기 등
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main /> 
        <NextScript />
      </body>
    </Html>
  )
}
