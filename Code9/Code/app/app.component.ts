import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  constructor(private service:CommonService){

  }
  sendToService(event,data:string):void{
    this.title = event.target.value;
    console.log('Send to Service Data  is ',data);
    this.service.setServiceData(event.target.value);

  }
}
