import { TodoPrismaClientModule } from '@my-app/todo-prisma-client';
import { Module } from '@nestjs/common';
import { TodoDataAccessService } from './todo-data-access.service';

@Module({
  imports: [TodoPrismaClientModule],
  providers: [TodoDataAccessService],
  exports: [TodoDataAccessService],
})
export class TodoDataAccessModule {}
