import { CreateMessageInput } from "./message.inputTypes";
import { MessageModel } from "./message.model";

export class MessageService {
  async createMessage(input: CreateMessageInput) {
    const createMessage = await (
      await MessageModel.create(input)
    ).populate("sender");
    return createMessage;
  }
}
