import { Component, OnInit } from '@angular/core';
import {CommonService} from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spademoapp';
  menus:any[] = [];
  name:string='';
  address:string='';
  message:string;
  changeParams(){
     this.common.setNameAddress(this.name , this.address);
  }
  constructor(private common:CommonService) { }
  ngOnInit(){
    this.menus = this.common.getMenus();
    this.common.getSubject().subscribe(data=>{
      this.message = data;
    },err=>{
      console.log('Subscribe Error ',err);
    },()=>{
      console.log('Completed');
    });
  }
}
