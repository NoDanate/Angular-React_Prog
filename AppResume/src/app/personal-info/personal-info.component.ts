import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-personal-info',
  imports: [],
  template: `
<div class="card">
  <h2>Персональная информация</h2>
  <img [src]="photoURL" alt="Фото" class="profile-photo">
  <p><strong>ФИО</strong> {{fullName}}</p>
  <p><strong>Номер</strong> {{phone}}</p>
  <p><strong>Город</strong> {{city}}</p>
</div>
`,
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  @Input() fullName!:string;
  @Input() phone!:string;
  @Input() city!:string;
  @Input() photoURL!: string;
}
