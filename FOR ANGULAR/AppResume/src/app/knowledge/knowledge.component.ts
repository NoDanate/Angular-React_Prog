import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {SkillsService} from './service';


@Component({
  selector: 'app-knowledge',
  imports: [
    NgForOf
  ],
  template: `
    <div class="skills-card">
      <h2>Навыки</h2>
      <ul class="skills">
        <li *ngFor="let skill of skills">
          {{skill.name}}
          <div class="progress-bar">
            <div class="progress" [style.width.%]="skill.level * 10"></div>
          </div>
        </li>
      </ul>
    </div>
  `,
  styleUrl: './knowledge.component.css'
})
export class KnowledgeComponent implements OnInit{
  skills: {name:string, level: number}[] = [];

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit(): void{
    this.skills = this.skillsService.getSkills();
  }
}
