import { Module, Global } from '@nestjs/common';
import { KnexConnectionFactory } from './KnexConnectionFactory';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [KnexConnectionFactory],
  exports: [KnexConnectionFactory],
})
export class KnexModule {}
