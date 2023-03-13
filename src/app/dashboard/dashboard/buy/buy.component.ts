import { NgSwitch, NgSwitchCase,NgFor,SlicePipe ,CurrencyPipe,DatePipe} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { MainserviceService } from 'src/app/mainservice.service';

// import Stepper from 'bs-stepper'


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  standalone: true,
  imports: [NgbProgressbarModule, NgSwitch, NgSwitchCase, FormsModule,NgFor,SlicePipe,CurrencyPipe,DatePipe],
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  constructor(private route: ActivatedRoute, private main: MainserviceService, private http: HttpClient,private router: Router) {

  }
  switchel = 1
  secondDisabled = true
  thirdDisabled = true
  firstLine = 0
  secondLine = 0
  id: any
  dates=new Date()
  
  numbers = [1, 2, 3, 4, 5]
  useres: any
  users: any = {}
  addres: any = {}
  products: any
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.main.getuser().subscribe((data) => {
      this.useres = data
      this.users.name = this.useres[0].name['firstname'] + ' ' + this.useres[0].name['lastname']
      this.users.email = this.useres[0].email
      this.users.phone = this.useres[0].phone
      // console.log(this.users)
      this.addres.city = this.useres[0].address['city']
      this.addres.street = this.useres[0].address['street'] + ' ' + this.useres[0].address['number']
      this.addres.zipCode = this.useres[0].address['zipcode']
      // console.log(this.useres[0].cart);
      
    })
    this.http.get('http://localhost:3000/products?id=' + this.id).subscribe((data) => {
      this.products = data
      this.products = this.products[0]
    })
  //  this.dates= this.date.setDate(this.date.getDate()+3)
  }
  submitUser(form: any) {
    this.switchel = 2
    this.secondDisabled = false
    this.firstLine = 100

  }
  userAddress(form: any) {
    this.switchel = 3
    this.thirdDisabled = false
    this.secondLine = 100
  }
  updateUser(){
    let id = this.useres[0].id
    this.useres[0].orders.push(this.products)
    
    this.main.updateOrdersUser(this.useres[0], id).subscribe((data) => {
      // console.log(data)
      alert("Your Order is Placed")
      this.router.navigate(['/dashboard'])
    })

  }

}
