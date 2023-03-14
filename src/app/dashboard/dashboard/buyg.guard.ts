import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuygGuard implements CanActivate {
  buyg=JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('buy'))))
  constructor(private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.buyg?true:this.route.navigateByUrl('/dashboard/home');
    console.log(this.buyg)
    if(this.buyg==true){
      return true
    }
    else{
      return this.route.navigateByUrl('/dashboard/home');
    }
  }
  
}
