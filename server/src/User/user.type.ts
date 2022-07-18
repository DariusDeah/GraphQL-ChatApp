import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export interface IUser {
  id: string;
  name: string;
  email: string;
  googleId?: string;
  password?: string;
}

export const UserType = new GraphQLObjectType<IUser>({
  name: "user",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString! },
    email: { type: GraphQLString! },
    googleId: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
