import { TodoPrismaService } from "@my-app/todo-prisma-client";
import { Injectable } from "@nestjs/common";


@Injectable()
export class TodoDataAccessService {
  constructor(private readonly todoPrismaClient: TodoPrismaService) {}

  findAll() {
    return this.todoPrismaClient.todo.findMany();
  }
}
