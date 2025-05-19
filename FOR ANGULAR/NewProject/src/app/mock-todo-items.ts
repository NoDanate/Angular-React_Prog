import {TaskStatus, ToDoItem} from './to-do-item';
import { v4 as uuidv4 } from 'uuid'

export const ITEMS: ToDoItem[] = [
  { id: uuidv4(), name: 'Do homework', status: TaskStatus.Active},
  { id: uuidv4(), name: 'Do chores', status: TaskStatus.Active},
  { id: uuidv4(), name: 'Cook something', status: TaskStatus.Active},
  { id: uuidv4(), name: 'Do pullups', status: TaskStatus.Active},
  { id: uuidv4(), name: 'Visit grandma', status: TaskStatus.Active},
  { id: uuidv4(), name: 'Clean your desk', status: TaskStatus.Active},
  { id: uuidv4(), name: 'Wash dishes', status: TaskStatus.Active},
  { id: uuidv4(), name: 'Visit parents', status: TaskStatus.Active},
  { id: uuidv4(), name: 'Clean your shoes', status: TaskStatus.Active},
  { id: uuidv4(), name: 'Take a bath', status: TaskStatus.Active},
];
