import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service';
@Component({
  selector: 'app-customeradd',
  templateUrl: './customeradd.component.html',
  styleUrls: ['./customeradd.component.css']
})
export class CustomeraddComponent implements OnInit {
  message:string;
  constructor(private crudService:CrudService) {
    this.message = '';
   }

  ngOnInit() {
  }
  add(name:string, address:string){
    this.message = this.crudService.add(name,address)?'Record Added':'Not Added';
  }

}
