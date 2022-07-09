import { getModelForClass, index, pre, prop, Ref } from "@typegoose/typegoose";
import { User } from "../User/user.model";
import { v4 as uuid } from "uuid";
import mongoose from "mongoose";
import * as MUUID from "uuid-mongodb";

export class Conversation {
  @prop({ default: () => MUUID.v4() })
  uuid: mongoose.Types.Buffer;

  @prop({ required: true, ref: () => User })
  participants: Ref<User>[];
}

export const ConversationModel =
  getModelForClass<typeof Conversation>(Conversation);
