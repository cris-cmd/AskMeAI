import { Module } from '@nestjs/common';
import { ChatModule } from './chat/ChatModule';
import { RedisModule } from 'libs/redis/RedisModule';
import { KnexModule } from 'libs/database/KnexModule';

@Module({
  imports: [ChatModule, KnexModule, RedisModule],
})
export class AppModule {}
