import { TodoPrismaService } from "@my-app/todo-prisma-client";
import { Injectable } from "@nestjs/common";


@Injectable()
export class TodoDataAccessService {
  constructor(private readonly todoPrismaClient: TodoPrismaService) {}

  async findAll() {
    try {
      return await this.todoPrismaClient.todo.findMany();
    } catch (error) {
      throw new Error('Failed to fetch todos');
    }
  }
}
