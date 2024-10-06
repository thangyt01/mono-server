import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@my-prisma/client/todo';

@Injectable()
export class TodoPrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}