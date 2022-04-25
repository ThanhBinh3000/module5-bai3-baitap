import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public num1: number;
  public num2: number;
  public ketqua: number;
  constructor() { }
  ngOnInit() {
  }
  cong() {
    this.ketqua = this.num1 + this.num2;
  }
  tru() {
    this.ketqua = this.num1 + this.num2;
  }
  nhan() {
    this.ketqua = this.num1 * this.num2;
  }
  chia() {
    this.ketqua = this.num1 / this.num2;
  }
}
