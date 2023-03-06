import { NgSwitch, NgSwitchCase } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { MainserviceService } from 'src/app/mainservice.service';

// import Stepper from 'bs-stepper'


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  standalone:true,
  imports:[NgbProgressbarModule,NgSwitch,NgSwitchCase,FormsModule],
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  constructor(private route:ActivatedRoute,private main:MainserviceService){

  }
  switchel=1
  secondDisabled=true
  thirdDisabled=true
  firstLine=0
  secondLine=0
id:any
  useres:any
  users:any={}
  addres:any={}
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id')
    this.main.getuser().subscribe((data)=>{
      this.useres=data
      this.users.name=this.useres[0].name['firstname']+' '+this.useres[0].name['lastname']
      this.users.email=this.useres[0].email
      this.users.phone=this.useres[0].phone
      // console.log(this.users)
      this.addres.city=this.useres[0].address['city']
      this.addres.street=this.useres[0].address['street']+' '+this.useres[0].address['number']
      this.addres.zipCode=this.useres[0].address['zipcode']
    })
  
  }
submitUser(form:any){
  this.switchel=2
  this.secondDisabled=false
  this.firstLine=100

}
userAddress(form:any){}

}
