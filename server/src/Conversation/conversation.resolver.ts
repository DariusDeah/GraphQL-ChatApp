import { CreateConversationInput } from "./conversation.inuptTypes";
import { IConversation } from "./conversation.type";

class ConversationResolver {
  conversationService: ConversationService;
  constructor() {
    this.conversationService = new ConversationService();
  }
  async createConversation(
    input: CreateConversationInput
  ): Promise<IConversation> {
    const createdConversation =
      await this.conversationService.createConversation(input);
  }
}
