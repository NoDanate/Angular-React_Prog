import { Component } from '@angular/core';
import {CurrencyPipe, DecimalPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-pipes-test',
  imports: [
    UpperCasePipe,
    DecimalPipe,
    LowerCasePipe,
    PercentPipe,
    CurrencyPipe,
    SlicePipe
  ],
  template: `
    <div>uppercase: {{ str | uppercase }}</div>
    <div>lowercase: {{ str | lowercase }}</div>
    <div>number: {{ num | number }}</div>
    <div>percent: {{ num | percent }}</div>
    <div>currency: {{ num | currency }}</div>
    <div>slice: {{ str | slice:0:6 }}</div>
    <div>slice: {{ str | slice:-8 }}</div>
    <div>slice: {{ num | number:'3.5-5': 'ru'}}</div>
    <div>slice: {{ money | currency: 'RUB'}}</div>

    `
})
export class PipesTestComponent {
  str =  'Hello world!';
  num = 3.141519;
  strr = 'На моем столе лежит огромный коврик для мышки';
  money = 23.45;
}
