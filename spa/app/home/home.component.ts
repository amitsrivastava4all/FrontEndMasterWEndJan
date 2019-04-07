import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Router,ChildActivationStart,ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  arr = [];


  constructor(public router: Router) {
    router.events.subscribe(e => {
      if (e instanceof ChildActivationStart) {
       // spinner.start(e.route);
      } else if (e instanceof ChildActivationEnd) {
        //spinner.end(e.route);
      }
    });
  }
  ngOnInit() {
    console.log('Home Loaded..')
  }
  ngOnDestroy(){
   this.arr = null;
  console.log('home unloaded..')
  }
  about():void{
    this.router.navigate(['/about']);
  }

}
