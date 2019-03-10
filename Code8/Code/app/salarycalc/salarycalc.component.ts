import {Component} from '@angular/core';
import {SalaryService} from './salary.service';
type mytype = {name:string, price:number};
@Component({
  selector:'salary-calc',
  //template:`<h1>This is Basic Salary {{basicSalary}}</h1>`,
  templateUrl:'salarycalc.component.html',
  styleUrls:['salarycalc.component.css'],
  providers:[SalaryService]
})
export class SalaryCalc{

  fruits:mytype[]= [{name:'Apple',price:90},{name:'Orange',price:100},{name:'Mango',price:120}];
  basicSalary:number;
  cardNumber:number;
  //salaryService:SalaryService;
  takeCardNo(event){
    this.cardNumber = event.target.value;
  }
  constructor(private salaryService:SalaryService){
    this.basicSalary = 0;
    //this.salaryService = new SalaryService();
  }
  takeSalary(event):void{
  this.basicSalary = event.target.value;
  this.salaryService.takeBasicSalary(this.basicSalary);
  }
}
