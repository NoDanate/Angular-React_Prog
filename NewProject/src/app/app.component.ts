import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToDoItemsComponent} from './to-do-items/to-do-items.component';
import {LowerCasePipe, UpperCasePipe} from '@angular/common';
import {PipesTestComponent} from './pipes-test/pipes-test.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoItemsComponent, UpperCasePipe, LowerCasePipe, PipesTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'To Do List';
  protected readonly console = console;
}


