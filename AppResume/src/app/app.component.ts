import { Component} from '@angular/core';
import {PersonalInfoComponent} from './personal-info/personal-info.component';
import {ExperienceComponent} from './experience/experience.component';
import {KnowledgeComponent} from './knowledge/knowledge.component';
import {LinksComponent} from './links/links.component';

@Component({
  selector: 'app-root',
  imports: [PersonalInfoComponent, ExperienceComponent, KnowledgeComponent, LinksComponent],
  //templateUrl: './app.component.html',
  template: `
    <div class="container">
      <h1 class="title">Резюме</h1>
      <app-personal-info [fullName]="fullName" [phone]="phone" [city]="city" [photoURL] = "photoURL">

      </app-personal-info>

      <app-experience [experience] = "experience">

      </app-experience>

      <app-knowledge [skills] = "skills">

      </app-knowledge>

      <app-links [links]="links">

      </app-links>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  fullName = "Пёдор Фешков";
  phone = '88005553535';
  city= 'Тюмень';
  photoURL = 'assets/photo.png'
  experience = [
    {
      position: 'Frontend developer',
      company: 'SBR',
      period: '2022-2024',
      description: 'Разработка веб-приложений с использованием Angular'
    },
    {
      position: 'Backend developer',
      company: 'GZPRM',
      period: '2020-2022',
      description: 'Разработка приложений на C#'
    }
  ];
  skills = [
    'JavaScrips',
    "Angular",
    "React",
    "Git",
    "Agile",
    "CSS",
    "HTML",
    "Postgres-SQL",
    "Microsoft SQL Server",
    "C#"
  ];

  links=[
    {name: 'GitHub', url:'https://github.com/NoDanate'},
    {name: 'Telegram', url:'https://t.me/someone4el'},
    {name: 'VK', url:'https://github.com/NoDanate'},
    {name: 'GitHub', url:'https://github.com/NoDanate'}
  ]
  }

