import { TodoPrismaClientModule } from '@my-app/todo-prisma-client';
import { Module } from '@nestjs/common';

@Module({
  imports: [TodoPrismaClientModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class DataAccessTodoModule {}
