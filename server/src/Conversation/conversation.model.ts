import { getModelForClass, index, pre, prop, Ref } from "@typegoose/typegoose";
import { User } from "../User/user.model";
import { v4 as uuid } from "uuid";

@pre<Conversation>("save", async function () {
  if (this.uid !== undefined) {
    return;
  }
  this.uid = uuid();
})
@index({ uid: 1 })
export class Conversation {
  @prop()
  uid: string;

  @prop({ required: true, ref: () => User })
  participants: Ref<User>[];
}

export const ConversationModel =
  getModelForClass<typeof Conversation>(Conversation);
