import { AppProps } from "next/app";
import Layout from "../src/commons/layout";
import ApolloSetting from "../src/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>=============여기는 _app.js컴포넌트 시작부분입니다.============</div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </div>
  );
}
