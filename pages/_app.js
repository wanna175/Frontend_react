import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 벡엔드에서 받아온 데이터 임시로 저장해놓기.
  }); //그래프큐엘 셋팅...

  return (
    <div>
      <div>=============여기는 _app.js컴포넌트 시작부분입니다.============</div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}
