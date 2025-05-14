import { Injectable } from '@angular/core';

@Injectable(

)
export class SkillsService {
  skills: {name: string, level: number}[] = [
    {name: 'JavaScript', level: 7},
    {name: 'Angular', level: 7.5},
    {name: 'React', level: 1},
    {name: 'Git', level: 8},
    {name: 'Agile', level: 6},
    {name: 'CSS', level: 9},
    {name: 'HTML', level: 10},
    {name: 'PostgresSQL', level: 8},
    {name: 'MS SQL', level: 8},
    {name: 'C#', level: 12}
  ];


  getSkills(){
    return this.skills;
  }
}
