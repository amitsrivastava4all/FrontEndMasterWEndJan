import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  message:string;
  constructor(private commonService:CommonService) {
    this.message = '';
   }

  ngOnInit() {
  this.commonService.getBS().subscribe(data=>{
    this.message = data;
  },err=>{

  },()=>{

  })
  }

}
