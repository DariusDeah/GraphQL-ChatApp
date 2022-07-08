import { GraphQLSchema } from "graphql/type";
import { ConversationMutation } from "./conversation.mutation";

export const ConversationSchema = new GraphQLSchema({
  mutation: ConversationMutation,
});
