import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql/type";
import { conversationResolver } from "./conversation.resolver";
import { ConversationType } from "./conversation.type";

export const ConversationRootQuery = new GraphQLObjectType({
  name: "ConversationRootQuery",
  description: "...",
  fields: {
    conversations: {
      type: GraphQLList(ConversationType),
      args: { userId: { type: GraphQLID! } },
      async resolve(parent, args) {
        const { userId } = args;
        return await conversationResolver.findUserConversations(userId);
      },
    },
  },
});
