import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  customers:Customer[] =[];
  constructor(private crudService:CrudService) { }
  view(name:string):void{

  }
  ngOnInit() {
    this.crudService.getBS().subscribe(data=>{
      console.log('Data is ',data);
      this.customers = data;
    },err=>{
      console.log('Error in Subscribe ',err);
    })

  }

}
