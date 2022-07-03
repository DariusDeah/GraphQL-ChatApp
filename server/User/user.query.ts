import { GraphQLID } from "graphql";
import { GraphQLObjectType } from "graphql/type/definition";
import { userResolver } from "./user.resolver";
import { UserType } from "./user.type";

export const UserRootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "",
  fields: {
    user: {
      type: UserType,
      args: { uid: { type: GraphQLID! } },
      async resolve(parent, args) {
        const { uid } = args;
        return await userResolver.findByUID(uid);
      },
    },
  },
});
