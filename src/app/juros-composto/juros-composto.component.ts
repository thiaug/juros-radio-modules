import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
  styleUrls: ['./juros-composto.component.css']
})
export class JurosCompostoComponent implements OnInit {
  value: number;
  rate: number;
  months: number;

  constructor() { }

  calcular(){
    return this.value * Math.pow(1 + this.rate,this.months);

  }

  ngOnInit() {
  }

}