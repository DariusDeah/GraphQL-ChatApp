import { mergeSchemas } from "@graphql-tools/schema";
import { ConversationSchema } from "./Conversation/conversation.index";
import { MessageSchema } from "./Message/message.index";
import { UserSchema } from "./User/user.index";
import { stitchSchemas } from "@graphql-tools/stitch";

export const Schema = stitchSchemas({
  subschemas: [UserSchema, ConversationSchema, MessageSchema],
});
