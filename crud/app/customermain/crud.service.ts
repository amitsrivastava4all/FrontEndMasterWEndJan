import { Injectable } from '@angular/core';
import {Customer} from './models/Customer';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  customers:Customer[]= [];
  private bs:BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>(this.customers);
  constructor(private http:HttpClient) { }
  add(name:string, address:string, phones:string){
    let customer:Customer= new Customer(name, address, phones);
    this.customers.push(customer);
    this.bs.next(this.customers);
    return true;
  }
  getBS():BehaviorSubject<Customer[]>{
  return this.bs;
  }
  callAjax(){
      return this.http.get('https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/names.json');
  }
}
