import {
  CreateConversationInput,
  FindUserConversations,
} from "./conversation.inuptTypes";
import { ConversationService } from "./conversation.service";
import { IConversation } from "./conversation.type";

class ConversationResolver {
  private conversationService: ConversationService;
  constructor() {
    this.conversationService = new ConversationService();
  }
  async findUserConversations(input: FindUserConversations) {
    return await this.conversationService.findUserConversations(input);
  }
  async createConversation(input: CreateConversationInput) {
    const createdConversation =
      await this.conversationService.createConversation(input);
    return createdConversation;
  }
}
export const conversationResolver = new ConversationResolver();
