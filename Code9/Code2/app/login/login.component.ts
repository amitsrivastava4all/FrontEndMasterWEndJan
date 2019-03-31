import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string='F';
  msg:string;
  constructor(private common:CommonService) {
    this.msg = '';
   }

  ngOnInit() {
  }
  doLogin(userid:string, pwd:string):void{
    if(userid==pwd){
    this.message = 'S';
    this.common.getSubject().next(this.message);

    }
    else{
      this.msg = 'Invalid Userid or Password';
    }
  }

}
