import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-links',
  imports: [
    NgForOf
  ],
  template: `
    <div class="links-card">
      <h2>Ссылки</h2>
      <ul *ngFor="let link of links">
        <li>
          <a [href]="link.url" target="_blank">{{link.name}}</a>
        </li>
      </ul>
    </div>
  `,
  styleUrl: './links.component.css'
})
export class LinksComponent {
  @Input() links!: {name:string; url: string}[]
}
