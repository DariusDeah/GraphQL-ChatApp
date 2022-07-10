import { CreateMessageInput } from "./message.inputTypes";
import { MessageService } from "./message.service";

class MessageResolver {
  private messagesService: MessageService;
  constructor() {
    this.messagesService = new MessageService();
  }
  async createMessage(input: CreateMessageInput) {
    return await this.messagesService.createMessage(input);
  }
}
export const messageResolver = new MessageResolver();
