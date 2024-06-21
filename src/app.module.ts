import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ServerConfig from './config/server.config';
import { DataBaseConfig } from './config/database.config';
import JwtConfig from './config/auth-token.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ServerConfig, JwtConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(DataBaseConfig),
    JwtModule.registerAsync({
      global: true,
      useFactory: (configService: ConfigService) => ({
        ...configService.get('auth-token'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
