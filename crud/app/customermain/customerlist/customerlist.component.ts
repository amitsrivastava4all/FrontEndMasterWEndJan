import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Customer } from '../models/Customer';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css'],
  animations:[trigger('listanimation',[state('in',style({opacity:1,transform:'translateX(0)'})),
  transition('void=>*',[style({opacity:0,transform:'translateX(-300px)'}),animate(6000)])])]
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
