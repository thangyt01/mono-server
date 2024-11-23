import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  id?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  done: boolean;
}
