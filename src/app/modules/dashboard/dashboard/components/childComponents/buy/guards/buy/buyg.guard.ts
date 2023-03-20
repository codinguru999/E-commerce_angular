import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuygGuard implements CanActivate {
  buyg = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('buy'))))
  constructor(private route: Router) { }
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.buyg == true) {
      return true
    }
    else {
      return this.route.navigateByUrl('/dashboard/home');
    }
  }

}
