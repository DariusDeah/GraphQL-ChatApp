import { GraphQLID } from "graphql";
import { GraphQLObjectType } from "graphql/type/definition";
import { Context } from "../interfaces/Contex.interface";
import { userResolver } from "./user.resolver";
import { UserType } from "./user.type";

export const UserRootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID! } },
      async resolve(parent, args, context) {
        try {
          const { id } = args;
          return await userResolver.findByID(id, context);
        } catch (error) {
          return error;
        }
      },
    },
  },
});
