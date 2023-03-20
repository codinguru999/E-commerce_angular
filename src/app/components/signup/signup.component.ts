import { Component, ElementRef, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MainserviceService } from '../../services/main/mainservice.service';
import { SignupServiceService } from '../../services/signup/signup-service.service';

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
  @ViewChild('popover')
  modal!: ElementRef;
  constructor(private signserv: SignupServiceService, private router: Router, private main: MainserviceService,private modalserv:NgbModal) {

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
      this.func(form)
    })

  }
  func(form: any) {
    if (form.valid) {
      if (this.signserv.findItem(this.signup.email, this.gdata)) {
        this.exist = true
      }
      else {
        this.signserv.setItem(this.signup.name, this.signup.email, this.signup.password)
        this.userCreationmsg()
        this.router.navigate(['/login'])
      }
    }
  }
  userCreationmsg(){
    this.modalserv.open(this.modal,{size:'sm'})
    setTimeout(() => {
      this.modalserv.dismissAll()
    }, 1000);
  }
}
