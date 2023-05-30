import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css']
})
export class JurosSimplesComponent implements OnInit {
  value: number;
  rate: number;
  months: number;

  constructor() { }

  calcular(){
    return this.value * (1 + this.rate * this.months);
  }

  ngOnInit() {
  }

}