export class ToDoItem{
  id!: string;
   name!: string;
   status!: TaskStatus;
}

export enum TaskStatus{
  Active = 'active',
  Done = 'done'
}
