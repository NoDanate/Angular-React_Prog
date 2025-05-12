import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-knowledge',
  imports: [
    NgForOf
  ],
  template: `
    <div class="skills-card">
      <h2>Навыки</h2>
      <ul class="skills">
        <li *ngFor="let skill of skills">{{skill}}</li>
      </ul>
    </div>
  `,
  styleUrl: './knowledge.component.css'
})
export class KnowledgeComponent {
  @Input() skills!: string[];
}
