import { HydratedDocument } from "mongoose";
import { BadRequestError } from "../utils/Errors";
import { CreateConversationInput } from "./conversation.inuptTypes";
import { ConversationModel } from "./conversation.model";
import { IConversation } from "./conversation.type";
import * as MUUID from "uuid-mongodb";

export class ConversationService {
  async createConversation(input: CreateConversationInput) {
    const createdConversation = await (
      await ConversationModel.create({ participants: input })
    ).populate("participants");
    if (!createdConversation) {
      throw new BadRequestError("error processing request,try again later");
    }
    return createdConversation;
  }
}
