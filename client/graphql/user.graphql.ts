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

export const createUser = gql`
  mutation createUser($name: String, $email: String, $password: String) {
    createUser(name: $name, email: $email, password: $password) {
      name
      email
      password
    }
  }
`;
