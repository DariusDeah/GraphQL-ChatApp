import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql/type";
import { ConversationType } from "./conversation.type";

export const ConversationMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createConversation: {
      type: ConversationType,
      args: {
        participants: { type: GraphQLList(GraphQLID)! },
      },
    },
  },
});
