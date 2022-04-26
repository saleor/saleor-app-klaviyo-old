import {
  ApolloClient,
  ApolloLink,
  concat,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const authMiddleware = (token?: string) =>
  new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    }));

    return forward(operation);
  });

const httpLink = (domain?: string) =>
  new HttpLink({
    uri: `https://${domain}/graphql/`,
  });

function createApolloClient(token?: string, domain?: string) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: concat(authMiddleware(token), httpLink(domain)),
    cache: new InMemoryCache(),
    defaultOptions,
  });
}

export { createApolloClient };
