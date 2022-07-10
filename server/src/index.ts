import { mergeSchemas } from "@graphql-tools/schema";
import { ConversationSchema } from "./Conversation/conversation.index";
import { MessageSchema } from "./Message/message.index";
import { UserSchema } from "./User/user.index";

export const Schema = mergeSchemas({
  schemas: [UserSchema, ConversationSchema, MessageSchema],
});
