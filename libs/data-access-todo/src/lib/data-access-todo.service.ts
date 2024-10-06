import { TodoPrismaService } from "@my-app/todo-prisma-client";
import { Injectable } from "@nestjs/common";


@Injectable()
export class DataAccessTodoService {
  constructor(private readonly TodoPrismaClien: TodoPrismaService) {}

  findAll() {
    return this.TodoPrismaClien.todo.findMany();
  }
}
