import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './Login';
import { LoginServiceService } from './login-service.service';

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
  isLoginValid=true
  constructor(private logserv: LoginServiceService, private router: Router) { }

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
        // console.log(this.parsedData)
        this.verify()

      })
    }
  }
  verify() {
    // console.log(this.parsedData)
    if (this.logserv.findItem(this.parsedData)) {
      this.userexist = false
      // console.log("User does not exist")
    }
    else {
      if (this.parsedData[0].password === this.login.password) {
        // console.log(this.parsedData[0].password)
        this.isLoginValid=true
        this.router.navigate(['/dashboard'])
        
      }
      else {
        this.wrnpass = false
      }
    }
  }
}
