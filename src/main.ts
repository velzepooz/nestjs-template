import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import {
  addSwagger,
  addExceptionFilter,
  addMultipart,
  addCookie,
  addHelmet,
} from './app/utils';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  const config = app.get<ConfigService>(ConfigService);
  addSwagger(app);
  addExceptionFilter(app);
  await addMultipart(app);
  await addCookie(app);
  await addHelmet(app);

  await app.listen(
    config.get<string>('server.port'),
    config.get<string>('server.host'),
  );
}
bootstrap();
