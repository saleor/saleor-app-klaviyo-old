import type { AppProps } from "next/app";
import * as React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "../graphql/client";
import AppProvider from "../providers/AppProvider";
import { useApp } from "../hooks/useApp";
import { ThemeProvider } from "@saleor/macaw-ui";

const ApolloWrapper: React.FC = ({ children }) => {
  const app = useApp();

  if (!app) {
    return <div>👋</div>;
  }

  const { token, domain } = app.getState()!;

  const authToken = process.env.SALEOR_AUTH_TOKEN;

  console.log(process.env.SALEOR_AUTH_TOKEN);

  const client = createApolloClient(
    authToken ?? "nCJYzPzhrp7Sew2FZe8aXLeQ9evwRv",
    domain
  );

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Saleor app</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppProvider>
        <ApolloWrapper>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloWrapper>
      </AppProvider>
    </>
  );
}

export default MyApp;
