import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../../services/main/mainservice.service';
import { LoginServiceService } from '../../services/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: any = {}
  loogedin = false
  logged = false
  userexist = true
  parsedData: any
  wrnpass = true
  name:any
  logins=false
  constructor(private logserv: LoginServiceService, private router: Router,private main:MainserviceService) { }

  setClass(value: any) {
    if (value.invalid && value.touched) {
      return 'form-control'
    }
    else {
      return 'form-control border border-primary'
    }
  }
  submitForm(form: any) {
    if (form.valid) {
      this.logserv.getItem(this.login.email).subscribe((data) => {
        this.parsedData = data
        this.verify()
      })
    }
    else{
      this.logins=true
    }
  }
  verify() {
    if (this.logserv.findItem(this.parsedData)) {
      this.userexist = false
    }
    else {
      if (this.parsedData[0].password === this.login.password) {
        this.logserv.loginValid=true
        let email=this.login.email
        this.router.navigateByUrl('/dashboard/home')
        localStorage.setItem('useremail',JSON.stringify(email))
        localStorage.setItem('islogin',JSON.stringify(true))
        this.main.setSubject()
      }
      else {
        this.wrnpass = false
      }
    }
  }
}
