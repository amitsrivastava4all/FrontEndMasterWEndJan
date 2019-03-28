import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private bs:BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private httpClient:HttpClient) { }
  public getBS():BehaviorSubject<string>{
    return this.bs;
  }
  doAjax():Observable<any>{
    const url ='https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
    return this.httpClient.get(url);
  }
  /*
  doAjax():Observable<any>{
    const url ='https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';

    return Observable.create((obs)=>{
      var pr = fetch(url);
      pr.then(res=>{
        return res.json();
      }).then(data=>{
        obs.next(data);
        obs.complete();
        console.log('Data is ',data);
      }).catch(err=>{
        obs.error(err);
        console.log('Error is ',err);
      })
    })
  */

  //}
}
