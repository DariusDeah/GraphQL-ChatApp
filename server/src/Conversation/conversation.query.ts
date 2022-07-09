import { GraphQLID, GraphQLObjectType } from "graphql/type";
import { ConversationType } from "./conversation.type";

export const ConversationRootQuery = new GraphQLObjectType({
  name: "ConversationRootQuery",
  description: "...",
  fields: {
    conversations: {
      type: ConversationType,
      args: { userId: { type: GraphQLID! } },
    },
  },
});
