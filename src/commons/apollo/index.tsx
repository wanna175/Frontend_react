import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
interface IApolloSetting {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSetting) {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 벡엔드에서 받아온 데이터 임시로 저장해놓기.
  }); //그래프큐엘 셋팅...backend-example을 섹션14까지 이용하였고, 그 이후는 backend-practice를 이용...

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
