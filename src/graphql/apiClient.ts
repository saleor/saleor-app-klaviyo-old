import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = (uri: string, token?: string) =>
  new ApolloClient({
    cache: new InMemoryCache(),
    // TO-DO
    uri,
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

export default client;
