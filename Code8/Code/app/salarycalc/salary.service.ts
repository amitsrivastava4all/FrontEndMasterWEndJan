import {Injectable} from '@angular/core';
@Injectable()
export class SalaryService{
  basicSalary:number;
  constructor(){
    this.basicSalary = 0;
  }
  takeBasicSalary(basicSalary:number):void{
    this.basicSalary = Number(basicSalary);
  }
  hra():number{
    return this.basicSalary * 0.30;
  }
  da():number{
    return this.basicSalary * 0.20;
  }
  ta():number{
    return this.basicSalary * 0.10;
  }
  pf():number{
    return this.basicSalary * 0.05;
  }
  gs():number{
    return this.basicSalary + this.hra() + this.da() + this.ta() - this.pf();
  }
  ns():number{
    return this.gs() - (this.gs() *0.10);
  }
}
