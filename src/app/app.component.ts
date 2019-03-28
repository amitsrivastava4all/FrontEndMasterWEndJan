import { Component } from '@angular/core';
import { interval, Observable, BehaviorSubject } from 'rxjs';
import {CommonService} from './common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjsdemos';
  data:any;
  error:any;
  constructor(private commonService:CommonService){

  }
  showHide():void{
    $('#show').toggle(3000);
  }
  sendData(event){
    let bs:BehaviorSubject<string>= this.commonService.getBS();
    bs.next(event.target.value);
  }
  callAjax(){
    let obs:Observable<any> = this.commonService.doAjax();
    obs.subscribe(data=>{
      this.data = data['mobiles'];
      console.log('Data Rec ......');
    },err=>{
      this.error = err;
      console.log('Error rec ......');
    },()=>{
    console.log('Complete ......');
    })
  }

  callRx(){
    var c ;
    const obs = interval(1000);
    var t = obs.subscribe(data=>{
       c= data;
    console.log('Data is ',data);
    },err=>{
    console.log('Error ',err);
    },()=>{
      console.log('Complete ');
    })
    if(c==10){
      t.unsubscribe();
      console.log('UnSubscribe');
    }

  }
}
