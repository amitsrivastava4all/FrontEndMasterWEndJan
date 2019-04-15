import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customercrud';
  myInterval(time){
    let count = 100;
    return Observable.create((obs)=>{
      setInterval(()=>{
        obs.next(count);
        //console.log('Count is ',count)
        count++;
      },time);
    })

  }
  callObs(){
    const obs = this.myInterval(1000);
    obs.subscribe(data=>{
      console.log('Data is ',data);
      this.title = 'Data is '+data;
    })
    /*
    const obs = interval(1000);
    obs.subscribe(data=>{
      console.log('Data is ',data);
      this.title = 'Data is '+data;
    })
    obs.subscribe(data=>{
      console.log('Data is ',data);
      this.title = 'Data is '+data;
    })
    */
  }
}
