import { Injectable, Inject } from '@nestjs/common';
import Redis from 'ioredis';
import { ChatRepository } from '../domain/ChatRepository';
import { REDIS_CLIENT } from 'libs/symbols/ProviderIdentity';

@Injectable()
export class ChatService {
  constructor(
    private readonly chatRepository: ChatRepository,
    @Inject(REDIS_CLIENT) private readonly redis: Redis,
  ) {}

  async getChatHistory(roomId: string) {
    const cachedMessages = await this.redis.get(`chat:${roomId}`);
    if (cachedMessages) return JSON.parse(cachedMessages);

    const messages = await this.chatRepository.getChatHistory(roomId);
    await this.redis.set(
      `chat:${roomId}`,
      JSON.stringify(messages),
      'EX',
      3600,
    );
    return messages;
  }

  async addMessage(
    roomId: string,
    userId: string,
    question: string,
    response: string,
  ) {
    await this.chatRepository.addMessage(roomId, userId, question, response);
    await this.redis.del(`chat:${roomId}`);
  }
}
