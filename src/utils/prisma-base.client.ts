import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaBaseClient extends PrismaClient implements OnModuleInit {
  private readonly _logger = new Logger(PrismaBaseClient.name);
  async onModuleInit() {
    this._logger.log('PrismaBaseClient connecting to db...');
    await this.$connect();
    this._logger.log('PrismaBaseClient connected to db');
  }
}
