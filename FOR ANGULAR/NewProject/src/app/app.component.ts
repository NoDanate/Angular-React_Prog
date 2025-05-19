import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToDoItemsComponent} from './to-do-items/to-do-items.component';
import {LowerCasePipe, registerLocaleData, UpperCasePipe} from '@angular/common';
import {PipesTestComponent} from './pipes-test/pipes-test.component';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

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


