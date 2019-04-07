import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name:string;
  address:string;
  constructor(private route:ActivatedRoute) {
    this.name = '';
    this.address = '';
   }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.name = data['name'];
      this.address = data['address'];
      console.log('Data is ',data);
    })
  }

}
