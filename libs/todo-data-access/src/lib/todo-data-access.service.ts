import { TodoPrisma, TodoPrismaService } from '@my-app/todo-prisma-client';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TodoDataAccessService {
  constructor(private readonly todoPrismaClient: TodoPrismaService) {}

  async findAll() {
    try {
      return await this.todoPrismaClient.todo.findMany();
    } catch (e: unknown) {
      const _e = e as Error;
      Logger.error(_e.message);
      throw new Error('Failed to fetch todos');
    }
  }

  async create(input: TodoPrisma.TodoCreateInput) {
    return this.todoPrismaClient.todo.create({ data: input });
  }

  async findOne(id: string) {
    return this.todoPrismaClient.todo.findUnique({ where: { id } });
  }

  async update(id: string, input: TodoPrisma.TodoUpdateInput) {
    return this.todoPrismaClient.todo.update({ where: { id }, data: input });
  }

  async remove(id: string) {
    return this.todoPrismaClient.todo.delete({ where: { id } });
  }
}
