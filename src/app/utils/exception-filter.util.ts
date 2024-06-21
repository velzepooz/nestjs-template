import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { HttpExceptionFilter } from '../filters/http-exception.filter';

export const addExceptionFilter = (app: NestFastifyApplication): void => {
  app.useGlobalFilters(new HttpExceptionFilter());
};
