import { getModelForClass } from "@typegoose/typegoose";
import { prop } from "@typegoose/typegoose/lib/prop";
import { Ref } from "@typegoose/typegoose/lib/types";
import { Conversation } from "../Conversation/conversation.model";
import { User } from "../User/user.model";
import * as MUUID from "uuid-mongodb";

export class Message {
  @prop({ default: () => MUUID.v4() })
  uuid: string;

  @prop({ required: true, ref: () => User })
  sender: Ref<User>;

  @prop({ required: true })
  content: string;

  @prop({ required: true, ref: () => Conversation })
  conversationId: Ref<Conversation>;
}
export const MessageModel = getModelForClass<typeof Message>(Message);
