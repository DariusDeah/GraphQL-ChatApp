import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql/type";
import { conversationResolver } from "./conversation.resolver";
import { ConversationType } from "./conversation.type";

export const ConversationMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createConversation: {
      type: ConversationType,
      args: {
        participants: {
          type: GraphQLList(GraphQLID)!,
        },
      },
      async resolve(parent, args) {
        const { participants } = args;
        return await conversationResolver.createConversation(participants);
      },
    },
  },
});
