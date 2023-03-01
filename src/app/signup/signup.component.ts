import { Component } from '@angular/core';
import { SignupServiceService } from './signup-service.service';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup: any={}
  exist=false
  gdata: any

  setClass(value: any){
    if(value.invalid && value.touched){
      return 'form-control'
    }
    else{
      return 'form-control border border-primary'
    }
  }
constructor(private signserv:SignupServiceService,private router: Router){}
  submitForm(form:any){
    this.signserv.getItem(this.signup.email).subscribe((data)=>{
      this.gdata=data
      // console.log(data)
      // console.log(this.gdata)
      this.func(form)
    })
   
  }
  func(form:any){
    if(form.valid){
      console.log("hai");
      
      if(this.signserv.findItem(this.signup.email,this.gdata)){
        console.log('user with this email exist')
        this.exist=true
        // this.signup={name:'',email:"",password:""}

      }
      else{
        alert("Your Account has been created with Email: "+this.signup.email +"and password: "+this.signup.password+" now you can login")
        this.signserv.setItem(this.signup.name,this.signup.email,this.signup.password)
        // this.location.back()
        this.router.navigate(['/login'])

      }
    }
   
  }
}
