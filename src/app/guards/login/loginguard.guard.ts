import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/login/login-service.service';
// import { LoginServiceService } from '../login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  constructor(private login:LoginServiceService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.login.loginValid? true: this.router.navigate(['/login']);
    console.log(localStorage.getItem('islogin'))
    if(localStorage.getItem('islogin')!=undefined || localStorage.getItem('islogin')!=null ){
      return this.router.navigate(['/dashboard'])
    }
    else{
      return true
    }
  }
  
}
