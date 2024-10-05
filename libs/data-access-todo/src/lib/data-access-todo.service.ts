import { TodoPrismaService } from "@my-app/todo-prisma-client";
import { Injectable } from "@nestjs/common";


@Injectable()
export class DataAccessTodoService {
  constructor(private readonly TodoPrismaClien: TodoPrismaService) {}

  getData() {
    return { message: 'Welcome to data-access-todo!' };
  }

  findAll() {
    return this.TodoPrismaClien.todo.findMany();
  }
}
