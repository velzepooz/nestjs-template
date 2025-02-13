import { Global, Module } from '@nestjs/common';
import { PrismaBaseClient } from './prisma-base.client';
import { CaptureError } from './capture-error';

@Global()
@Module({
  providers: [CaptureError, PrismaBaseClient],
  exports: [CaptureError, PrismaBaseClient],
})
export class GlobalModule {}
