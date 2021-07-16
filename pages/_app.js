import "../styles/globals.css";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const { GRAPHQL_SERVER } = process.env;

  const client = new ApolloClient({
    link: new createHttpLink({
      uri: GRAPHQL_SERVER,
    }),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
