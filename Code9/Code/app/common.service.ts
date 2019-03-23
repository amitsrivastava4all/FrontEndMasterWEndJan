import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  serviceData:string;
  setServiceData(data:string):void{
    this.serviceData = data;
  }
  getServiceData():string{
    return this.serviceData;
  }
  constructor() {
    this.serviceData = '';
   }
}
