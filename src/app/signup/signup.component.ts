import { Component } from '@angular/core';
import { SignupServiceService } from './signup-service.service';
import { ActivatedRoute, NavigationStart, Route, Router } from '@angular/router';
import { MainserviceService } from '../services/main/mainservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup: any = {}
  exist = false
  gdata: any
  url: any
  urls: any
  signups = false
  constructor(private signserv: SignupServiceService, private router: Router, private main: MainserviceService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.main.subject.next('false')
  }
  setClass(value: any) {
    if (value.invalid && value.touched) {
      return 'form-control'
    }
    else {
      return 'form-control border border-primary'
    }
  }
  submitForm(form: any) {
    if (form.invalid) {
      this.signups = true
    }
    this.signserv.getItem(this.signup.email).subscribe((data) => {
      this.gdata = data
      // console.log(data)
      // console.log(this.gdata)
      this.func(form)
    })

  }
  func(form: any) {
    if (form.valid) {
      // console.log("hai");

      if (this.signserv.findItem(this.signup.email, this.gdata)) {
        // console.log('user with this email exist')
        this.exist = true
        // this.signup={name:'',email:"",password:""}

      }
      else {
        // alert("Your Account has been created with: \nEmail: "+this.signup.email +"\nPassword: "+this.signup.password+"\n Now you can login")
        this.signserv.setItem(this.signup.name, this.signup.email, this.signup.password)
        // this.location.back()
        this.router.navigate(['/login'])

      }
    }

  }
}
