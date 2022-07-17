import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export const findUsers = gql`
query users($name:string){
  user(name:$name){
    id
    name
    email
}
`;
