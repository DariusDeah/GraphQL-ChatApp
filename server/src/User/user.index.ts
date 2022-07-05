import { GraphQLSchema } from "graphql";
import { UserMutation } from "./user.mutation";
import { UserRootQuery } from "./user.query";

export const UserSchema = new GraphQLSchema({
  query: UserRootQuery,
  mutation: UserMutation,
});
