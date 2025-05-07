import {Component, OnInit} from '@angular/core';
import {ToDoItem} from '../to-do-item';
import {ITEMS} from '../mock-todo-items';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

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
  OnSelected(item: ToDoItem) {
    this.selectedItem = item
  }

  OnDoubleClick(item: ToDoItem){
    item.isComplete = !item.isComplete;
  }

  AddItem(){
    const newItem: ToDoItem = {
      id: this.items.length + 1,
      name: "New Task",
      isComplete: false
    };

    this.items.push(newItem);
  }

  RemoveItem(item: ToDoItem){
  this.items = this.items.filter(i => i.id !== item.id)
    if(this.selectedItem?.id === item.id){
      this.selectedItem = undefined;
    }
  }
  constructor() {}
  ngOnInit(): void {}


}

