import { ConfigService } from '@nestjs/config';
import knex, { Knex } from 'knex';
import { KNEX_CONNECTION } from 'libs/symbols/ProviderIdentity';

export const KnexConnectionFactory = {
  provide: KNEX_CONNECTION,
  useFactory: (configService: ConfigService): Knex =>
    knex({
      client: 'pg',
      connection: {
        host: configService.get<string>('DB_HOST'),
        port: Number(configService.get<string>('DB_PORT')),
        user: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
      } as Knex.StaticConnectionConfig,
      searchPath: ['public'],
      pool: {
        min: 0,
        max: 80,
        afterCreate: (
          connection: any,
          callback: (err: Error | null, connection: any) => void,
        ) => {
          connection.query('SET TIME ZONE "UTC";', (err: Error | null) => {
            callback(err, connection);
          });
        },
      },
    }),
  inject: [ConfigService],
};
