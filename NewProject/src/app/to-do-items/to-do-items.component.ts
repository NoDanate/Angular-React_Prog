import {Component, OnInit} from '@angular/core';
import {ToDoItem} from '../to-do-item';
import {ITEMS} from '../mock-todo-items';
import {NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'app-to-do-items',
  imports: [
    NgForOf,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
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
  constructor() {}
  ngOnInit(): void {}


}

