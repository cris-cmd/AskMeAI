import { readFileSync } from 'fs';
import { resolve } from 'path';
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  const sql = readFileSync(resolve(__dirname, './sql/init.sql')).toString();
  return knex.raw(sql);
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists('chat_history')
    .dropTableIfExists('rooms')
    .dropTableIfExists('users');
}
