import { Module } from '@nestjs/common';
import { TodoPrismaService } from './todo-prisma-client.service';

@Module({
  controllers: [],
  providers: [TodoPrismaService],
  exports: [TodoPrismaService],
})
export class TodoPrismaClientModule {}
