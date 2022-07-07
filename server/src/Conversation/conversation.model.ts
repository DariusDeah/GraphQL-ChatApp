import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../User/user.model";

export class Conversation {
  @prop({ required: true })
  uid: string;

  @prop({ required: true, ref: () => User })
  participants: Ref<User[]>;
}

export const ConversationModel =
  getModelForClass<typeof Conversation>(Conversation);
