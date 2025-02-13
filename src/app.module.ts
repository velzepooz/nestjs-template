import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaBaseClient } from './utils/prisma-base.client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ServerConfig from './config/server.config';
import JwtConfig from './config/auth-token.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ServerConfig, JwtConfig],
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      global: true,
      useFactory: (configService: ConfigService) => ({
        ...configService.get('auth-token'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaBaseClient],
})
export class AppModule {}
