import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoDataAccessService } from '@my-app/todo-data-access';

@Injectable()
export class TodoService {
  constructor(
    private readonly todoDataAccessService: TodoDataAccessService
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todoDataAccessService.create(createTodoDto);
  }

  findAll() {
    return this.todoDataAccessService.findAll();
  }

  findOne(id: string) {
    return this.todoDataAccessService.findOne(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoDataAccessService.update(id, updateTodoDto);
  }

  remove(id: string) {
    return this.todoDataAccessService.remove(id);
  }
}
