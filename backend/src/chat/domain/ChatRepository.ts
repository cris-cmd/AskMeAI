import { ChatMessage } from './ChatEntity';

export interface ChatRepository {
  getChatHistory(roomId: string): Promise<ChatMessage[]>;
  addMessage(
    roomId: string,
    userId: string,
    question: string,
    response: string,
  ): Promise<void>;
}
