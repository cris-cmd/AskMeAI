import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatService } from '../application/ChatService';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatUseCase: ChatService) {}

  @Get(':roomId')
  async getChatHistory(@Param('roomId') roomId: string) {
    return this.chatUseCase.getChatHistory(roomId);
  }

  @Post()
  async addMessage(
    @Body()
    body: {
      roomId: string;
      userId: string;
      question: string;
      response: string;
    },
  ) {
    return this.chatUseCase.addMessage(
      body.roomId,
      body.userId,
      body.question,
      body.response,
    );
  }
}
