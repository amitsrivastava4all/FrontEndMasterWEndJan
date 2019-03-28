import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../common.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output()
  sendtochild:EventEmitter<string> = new EventEmitter<string>();
  @Input('parentdata')
  x:string;
  msg:string;
  serviceData:string;
  constructor(private _service:CommonService) { }

public get service():CommonService{
  return this._service;
}

  send(val:string):void{
    this.sendtochild.emit(val);
  }
  showParent(myData:string){
    this.msg = myData;
  }
  getData():void{
    this.serviceData = this._service.getServiceData();
  }

}
