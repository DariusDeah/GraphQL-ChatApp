import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "localhost:5000/graphql",
  cache: new InMemoryCache(),
});

client.query({
  query: gql`
    {
      users {
        name
      }
    }
  `,
});
