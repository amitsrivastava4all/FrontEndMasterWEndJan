import {Component} from '@angular/core';
import {SalaryService} from './salary.service';
@Component({
  selector:'salary-calc',
  //template:`<h1>This is Basic Salary {{basicSalary}}</h1>`,
  templateUrl:'salarycalc.component.html',
  styleUrls:['salarycalc.component.css'],
  providers:[SalaryService]
})
export class SalaryCalc{
  fruits:string[]= ['Apple','Orange','Mango'];
  basicSalary:number;
  //salaryService:SalaryService;
  constructor(private salaryService:SalaryService){
    this.basicSalary = 0;
    //this.salaryService = new SalaryService();
  }
  takeSalary(event):void{
  this.basicSalary = event.target.value;
  this.salaryService.takeBasicSalary(this.basicSalary);
  }
}
