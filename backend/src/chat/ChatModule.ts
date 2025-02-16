import { Module } from '@nestjs/common';
import { ChatRepositoryImpl } from './infrastructure/ChatRepositoryImpl';
import { ChatService } from './application/ChatService';
import { ChatController } from './presentation/ChatController';

@Module({
  providers: [
    { provide: 'ChatRepository', useClass: ChatRepositoryImpl },
    ChatService,
  ],
  controllers: [ChatController],
})
export class ChatModule {}
