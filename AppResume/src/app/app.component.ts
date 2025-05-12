import { Component} from '@angular/core';
import {PersonalInfoComponent} from './personal-info/personal-info.component';
import {ExperienceComponent} from './experience/experience.component';
import {KnowledgeComponent} from './knowledge/knowledge.component';
import {LinksComponent} from './links/links.component';

@Component({
  selector: 'app-root',
  imports: [
    PersonalInfoComponent,
    ExperienceComponent,
    KnowledgeComponent,
    LinksComponent
  ],
  //templateUrl: './app.component.html',
  template: `
    <div class="container">
      <h1 class="title">Резюме</h1>
      <app-personal-info
        [fullName]="fullName"
        [phone]="phone"
        [city]="city"
        [photoURL]="photoURL"></app-personal-info>
      <app-experience [experience]="experience"></app-experience>
      <app-knowledge [skills]="skills"></app-knowledge>
      <app-links [links]="links"></app-links>
    </div>
  `,

  styleUrl: './app.component.css'
})
export class AppComponent {
  fullName = "Катаев Илья";
  phone= "89556667788";
  city= "Тюмень";
  photoURL = 'assets/photo.png';
  experience = [
    {
      position: 'Frontend разработчик',
      company: 'CRT',
      period: '2022 - 2024',
      description: 'Разработка веб приложений с использованием Angular'
    },
    {
      position: 'Backend разработчик',
      company: 'Газпром',
      period: '2018 - 2022',
      description: 'Разрабатывать backend приложения на языке Python'
    },
  ];
  skills = [
    'JavaScript',
    'Angular',
    'React',
    'Git',
    'Agile',
    'CSS',
    'HTML',
    'PostgresSQL',
    'Microsoft Server SQL',
    'C#'
  ];

  links = [
    {name: 'GitHub', url: 'https://github.com/IliaKataev'},
    {name: 'GitHub', url: 'https://github.com/IliaKataev'},
    {name: 'GitHub', url: 'https://github.com/IliaKataev'},
    {name: 'GitHub', url: 'https://github.com/IliaKataev'}
  ];
}
