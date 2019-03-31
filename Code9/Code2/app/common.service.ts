import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private menus:any[] = [{name:'Home',link:'/'},{name:'About',link:'/XYZ'},{name:'Contact',link:'/contact/Amit/Delhi'}];
  private bs:BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }
  getSubject():BehaviorSubject<string>{
    return this.bs;
  }
  setNameAddress(name, address):void{
     this.menus[2].link = "contact/"+name+"/"+address;
  }
  getMenus():any[]{
    return this.menus;

  }
}
