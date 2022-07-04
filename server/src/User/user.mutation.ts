import { GraphQLObjectType, GraphQLString } from "graphql/type";
import { userResolver } from "./user.resolver";
import { UserType } from "./user.type";

export const UserMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString! },
        email: { type: GraphQLString! },
        password: { type: GraphQLString },
        googleId: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const { name, email, password, googleId } = args;
        return await userResolver.createUser({
          name,
          email,
          password,
          googleId,
        });
      },
    },

    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString! },
        password: { type: GraphQLString! },
      },
      async resolve(parent, args) {
        const { email, password } = args;
        return await userResolver.login({ email, password });
      },
    },
  },
});
