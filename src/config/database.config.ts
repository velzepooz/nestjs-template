import * as process from 'node:process';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { z } from 'zod';

dotenv.config();

export const databaseSchema = z.object({
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.string(),
  DATABASE_USERNAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string(),
});

export const DataBaseConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [],
  migrations: ['./dist/migrations/*.js'],
};

export default new DataSource({ ...DataBaseConfig });