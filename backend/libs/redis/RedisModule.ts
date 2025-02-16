import { Module, Global } from '@nestjs/common';
import { RedisConnectionFactory } from './RedisFactory';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [RedisConnectionFactory],
  exports: [RedisConnectionFactory],
})
export class RedisModule {}
