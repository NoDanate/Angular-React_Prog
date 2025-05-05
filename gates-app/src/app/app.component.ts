import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gates-app';
  quotes: string[] = [
    'Patience is a key element of success',
    'If you think your teacher is tough, wait till you get a boss',
    'Life is not fair — get used to it!',
    'Success is a lousy teacher. It seduces smart people into thinking they can’t lose',
    'Be nice to nerds. Chances are you’ll end upworking for one'
  ];
}
