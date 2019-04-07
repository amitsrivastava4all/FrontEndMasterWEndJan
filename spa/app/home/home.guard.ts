import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';

@Injectable()
export class HomeGuard implements CanActivate{
  constructor(private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(localStorage.userid=='amit'){
      return true;
    }
    else{
    this.router.navigate(['/error']);
      //return false;
    }
  }
}
