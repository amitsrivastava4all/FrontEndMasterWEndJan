import { Injectable } from '@angular/core';
import {Customer} from './models/Customer';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  customers:Customer[]= [];
  private bs:BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>(this.customers);
  constructor() { }
  add(name:string, address:string){
    let customer:Customer= new Customer(name, address);
    this.customers.push(customer);
    this.bs.next(this.customers);
    return true;
  }
  getBS():BehaviorSubject<Customer[]>{
  return this.bs;
  }
}
