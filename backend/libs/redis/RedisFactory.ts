import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { REDIS_CLIENT } from 'libs/symbols/ProviderIdentity';

export const RedisConnectionFactory = {
  provide: REDIS_CLIENT,
  useFactory: (configService: ConfigService): Redis =>
    new Redis(
      configService.get<string>('REDIS_URL') || 'redis://localhost:6379',
    ),
  inject: [ConfigService],
};
