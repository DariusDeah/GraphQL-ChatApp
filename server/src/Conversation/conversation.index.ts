import { GraphQLSchema } from "graphql/type";
import { ConversationMutation } from "./conversation.mutation";
import { ConversationRootQuery } from "./conversation.query";

export const ConversationSchema = new GraphQLSchema({
  mutation: ConversationMutation,
  query: ConversationRootQuery,
});
