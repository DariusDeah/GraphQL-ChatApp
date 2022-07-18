import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const findUsers = gql`
  query users($name: String) {
    users(name: $name) {
      _id
      name
      email
    }
  }
`;
