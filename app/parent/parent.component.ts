import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  txt:string ;
  str:string;

  //@ViewChild(ChildComponent)
  //childComp:ChildComponent;

  @ViewChildren(ChildComponent)
  childCompList:QueryList<ChildComponent>;
  constructor() {
    this.str = this.txt = '';
   }

   recDataFromChild(data){
      this.str = data;
   }

  ngOnInit() {
  }
  takeInput(event){
    this.txt = event.target.value;
    this.childCompList.forEach(child=>{
      child.showParent(this.txt);
    })
    //this.childComp.showParent(this.txt);
  }

}
