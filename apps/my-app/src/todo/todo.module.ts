import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoDataAccessModule } from '@my-app/todo-data-access';

@Module({
  imports: [TodoDataAccessModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
