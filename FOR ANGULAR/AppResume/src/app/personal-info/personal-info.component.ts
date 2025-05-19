import {Component, Input} from '@angular/core';
import {DatePipe, NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-personal-info',
  imports: [
    DatePipe,
    NgClass,
    NgStyle
  ],
  template: `
  <div class="card" [ngClass]="{ 'highlight' : isHighlighted}" [ngStyle]="{'border-color' : isHighlighted ? '#007bff' : '#ccc'}">
    <div class="flex-class">
      <p class="name-personal">{{fullName}}</p>
      <img [src]="photoURL" alt="Фото" class="profile-photo">
    </div>
    <div class="flex-column">
      <p><strong>Номер: </strong>  {{phone}}</p>
      <p> email: {{email}}</p>
      <p><strong>Город: </strong>  {{city}}</p>
      <p><strong>Дата рождения: </strong>  {{currentDate | date: 'dd.MM.yyyy'}}</p>
    </div>
  </div>
  `,
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  @Input() fullName!: string;
  @Input() phone!: string;
  @Input() city!: string;
  @Input() photoURL!: string;
  @Input() email!: string;
  public currentDate = new Date();
  @Input() isHighlighted!: boolean;
}
