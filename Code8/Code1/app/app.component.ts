import { Component } from "@angular/core";

@Component({
selector:'app-root',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css']
//template:`<h1>I am Angular </h1>`

})
export class AppComponent{
  str:string;
  isHide:boolean;
  cssClass:string;
  takeInput(event):void{
    this.str = event.target.value;
  }
  showHide():void{
    this.isHide = !this.isHide;
  }
  constructor(){
    this.cssClass = 'green';
    this.isHide = true;
    this.str = 'This is my Message';
  }

}
