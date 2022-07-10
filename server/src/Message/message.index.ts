import { GraphQLSchema } from "graphql/type/schema";
import { MessageMutation } from "./message.mutation";

export const MessageSchema = new GraphQLSchema({
  mutation: MessageMutation,
});
