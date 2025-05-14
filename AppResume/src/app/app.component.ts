import { Component} from '@angular/core';
import {PersonalInfoComponent} from './personal-info/personal-info.component';
import {ExperienceComponent} from './experience/experience.component';
import {KnowledgeComponent} from './knowledge/knowledge.component';
import {LinksComponent} from './links/links.component';
import {SkillsService} from './knowledge/service';

@Component({
  selector: 'app-root',
  providers: [SkillsService],
  imports: [
    PersonalInfoComponent,
    ExperienceComponent,
    KnowledgeComponent,
    LinksComponent
  ],
  //templateUrl: './app.component.html',
  template: `
    <button (click)="toggleHighlight()" class="hide">Toggle Выделение</button>
    <div class="container">
      <h1 class="title">Резюме</h1>
      <app-personal-info
        [fullName]="fullName"
        [phone]="phone"
        [city]="city"
        [photoURL]="photoURL"
        [isHighlighted]="isHighlighted"
        [email]="email"
      ></app-personal-info>
      <app-experience [experience]="experience"></app-experience>
      <app-knowledge></app-knowledge>
      <app-links [links]="links"></app-links>
    </div>
  `,

  styleUrl: './app.component.css'
})
export class AppComponent {

  public isHighlighted = false;

  toggleHighlight(){
    this.isHighlighted = !this.isHighlighted;
    console.log('changed',this.isHighlighted)
  }


  fullName = "Катаев Илья";
  phone= "89556667788";
  city= "Тюмень";
  email: string = "example@gmail.com";
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
    {
      position: 'Backend разработчик',
      company: 'Газпром',
      period: '2018 - 2022',
      description: 'Разрабатывать backend приложения на языке Python'
    },
  ];

  links = [
    {name: 'GitHub', url: 'https://github.com/IliaKataev'},
    {name: 'GitHub', url: 'https://github.com/IliaKataev'},
    {name: 'GitHub', url: 'https://github.com/IliaKataev'},
    {name: 'GitHub', url: 'https://github.com/IliaKataev'}
  ];
}
