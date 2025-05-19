import {Component, HostListener, OnInit} from '@angular/core';
import {TaskStatus, ToDoItem} from '../to-do-item';
import {ITEMS} from '../mock-todo-items';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-to-do-items',
  imports: [
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './to-do-items.component.html',
  styleUrl: './to-do-items.component.css',

})
export class ToDoItemsComponent implements OnInit {
  items = ITEMS;
  selectedItem: ToDoItem | undefined;
  filter: TaskStatus | 'all' = 'all';
  editingItem: ToDoItem | undefined;

  constructor() {}
  ngOnInit(): void {
    this.LoadItems();
  }

  LoadItems(){
    const storedItems = localStorage.getItem('todo-item');
    if(storedItems){
      this.items = JSON.parse(storedItems) as ToDoItem[];
    }
  }

  SaveItems(){
    localStorage.setItem('todo-item', JSON.stringify(this.items));
  }



  OnSelected(item: ToDoItem, event: MouseEvent) {
    this.selectedItem = item;
    event.stopPropagation();

  }

  OnDoubleClick(item: ToDoItem){
    item.status = item.status === TaskStatus.Active ? TaskStatus.Done : TaskStatus.Active;
    this.SaveItems();
  }

  AddItem(){
    const newItem: ToDoItem = {
      id: uuidv4(),
      name: "New Task",
      status: TaskStatus.Active
    };

    this.items.push(newItem);
    this.SaveItems();
  }

  RemoveSelectedItem(){
    if(this.selectedItem){
      this.items = this.items.filter(i => i.id !== this.selectedItem?.id);
      this.selectedItem = undefined;
      this.SaveItems();
    }
  }


  FilterItems(): ToDoItem[]{
    return this.filter === "all" ? this.items : this.items.filter(i => i.status === this.filter)
  }

  SetFilter(filter: TaskStatus | "all"){
    this.filter = filter
  }

  StartEdit(item: ToDoItem){
    this.editingItem = item;
  }

  StopEdit(){
    this.editingItem = undefined;
    this.SaveItems();
  }

  @HostListener('document:click', ['$event'])
  DeselectClick(event: MouseEvent){
    const target = event.target as HTMLElement;
    if(!target.closest(".items") && this.selectedItem){
      this.selectedItem = undefined;
    }
  }

  protected readonly TaskStatus = TaskStatus;
  protected readonly event = event;
}

