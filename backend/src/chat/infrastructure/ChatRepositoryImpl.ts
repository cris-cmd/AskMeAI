import { Knex } from 'knex';
import { Inject, Injectable } from '@nestjs/common';
import { ChatRepository } from '../domain/ChatRepository';
import { ChatMessage } from '../domain/ChatEntity';
import { KNEX_CONNECTION } from 'libs/symbols/ProviderIdentity';

@Injectable()
export class ChatRepositoryImpl implements ChatRepository {
  constructor(@Inject(KNEX_CONNECTION) private readonly rdb: Knex) {}

  async getChatHistory(roomId: string): Promise<ChatMessage[]> {
    const messages = await this.rdb('chat_history')
      .where({ room_id: roomId })
      .select('*');
    return messages.map(
      (msg) =>
        new ChatMessage(
          msg.id,
          msg.room_id,
          msg.user_id,
          msg.question,
          msg.response,
          msg.created_at,
        ),
    );
  }

  async addMessage(
    roomId: string,
    userId: string,
    question: string,
    response: string,
  ): Promise<void> {
    await this.rdb('chat_history').insert({
      room_id: roomId,
      user_id: userId,
      question,
      response,
    });
  }
}
