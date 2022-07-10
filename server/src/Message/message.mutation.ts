import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql/type";
import { messageResolver } from "./message.resolver";
import { MessageType } from "./message.type";

export const MessageMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createMessage: {
      type: MessageType,
      args: {
        content: { type: GraphQLString! },
        conversationId: { type: GraphQLString! },
        sender: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const { content, conversationId, sender } = args;
        return await messageResolver.createMessage({
          content,
          conversationId,
          sender,
        });
      },
    },
  },
});
