import { useCallback } from "react";

import { Normalize } from "styled-normalize";

import type { AppProps } from "next/app";
import Head from "next/head";

import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

import { ThemeProvider, createGlobalStyle } from "styled-components";

import { theme } from "../data/theme";

let apolloClient: ApolloClient<any>;

const GlobalStyle = createGlobalStyle<typeof theme>`
  body {
    * {
      box-sizing: border-box;
    }

    background-color: ${({ babyBlue }) => babyBlue};
    font-family: Arial;
  }
`;

function App({ Component, pageProps }: AppProps) {
  const createApolloClient = useCallback(() => {
    const httpLink = createHttpLink({
      uri: "https://graphql.contentful.com/content/v1/spaces/jgxvzzx7ps77",
    });

    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: "Bearer AEf7QMYxPL9rGzq0iYw8vNWzbRvGEhLrtPXHYWYYE_I",
      },
    }));

    const apolloClient = new ApolloClient({
      cache: new InMemoryCache(),
      link: authLink.concat(httpLink),
      ssrMode: typeof window === "undefined",
    });

    return apolloClient;
  }, []);

  let client = apolloClient ?? createApolloClient();

  return (
    <>
      <GlobalStyle {...theme} />
      <Normalize />

      <Head>
        <title>List of blog entries</title>
      </Head>

      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
