import { GraphQLSchema } from "graphql";
import { UserRootQuery } from "./user.query";

export const UserSchema = new GraphQLSchema({
  query: UserRootQuery,
});
