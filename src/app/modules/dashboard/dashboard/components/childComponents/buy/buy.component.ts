import { NgSwitch, NgSwitchCase, NgFor, SlicePipe, CurrencyPipe, DatePipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { MainserviceService } from 'src/app/services/main/mainservice.service';
import { environment } from 'src/environment/environment';
import { HomeserviceService } from '../../../services/home/homeservice.service';
import { OrderServiceService } from '../../../services/order/order-service.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  standalone: true,
  imports: [NgbProgressbarModule, NgSwitch, NgSwitchCase, FormsModule, NgFor, SlicePipe, CurrencyPipe, DatePipe, NgIf],
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  constructor(private route: ActivatedRoute, private home: HomeserviceService, private main: MainserviceService, private http: HttpClient, private router: Router, private orderserv: OrderServiceService, private moadlservice: NgbModal) {

  }
  url=environment.apiURL
  multipleBuy = false
  switchel = 1
  secondDisabled = true
  thirdDisabled = true
  firstLine = 0
  secondLine = 0
  id: any
  dates = new Date()
  count = 1
  numbers = [1, 2, 3, 4, 5]
  useres: any
  users: any = {}
  addres: any = {}
  products: any
  productList: any
  sum = 0
  @ViewChild('btn1')
  btn1!: ElementRef;
  @ViewChild('btn2')
  btn2!: ElementRef;
  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      if (data.has('id')) {
        this.id = data.get('id')
        this.orderserv.multipleBuy = false
        if (this.id <= this.home.length) {
          this.http.get(this.url+'/products?id=' + this.id).subscribe((data) => {
            this.products = data
            this.products = this.products[0]
          })
        }
        else {
          this.router.navigateByUrl('/dashboard/no')
        }
      }
      else {
        this.productList = this.orderserv.cart
        for (let x of this.productList) {
          this.sum += x.price * x.count
        }
      }
    })
    this.main.getuser().subscribe((data) => {
      this.useres = data
      this.users.name = this.useres[0].name['firstname'] + ' ' + this.useres[0].name['lastname']
      this.users.email = this.useres[0].email
      this.users.phone = this.useres[0].phone
      this.addres.city = this.useres[0].address['city']
      this.addres.street = this.useres[0].address['street'] + ' ' + this.useres[0].address['number']
      this.addres.zipCode = this.useres[0].address['zipcode']
    })
    this.multipleBuy = this.orderserv.multipleBuy
  }
  submitUser() {
    this.btn1.nativeElement.innerHTML = '&#x2713;'
    this.btn1.nativeElement.classList.remove('btn-primary')
    this.btn1.nativeElement.classList.add('btn-success')

    this.switchel = 2
    this.secondDisabled = false
    this.firstLine = 100

  }
  userAddress() {
    this.btn2.nativeElement.innerHTML = '&#x2713;'
    this.btn2.nativeElement.classList.remove('btn-primary')
    this.btn2.nativeElement.classList.add('btn-success')
    this.switchel = 3
    this.thirdDisabled = false
    this.secondLine = 100
  }
  updateUser(popover: any) {
    let id = this.useres[0].id
    if (this.multipleBuy == false) {
      this.products['count'] = this.count
      this.products['deliverDate'] = this.dates
      this.useres[0].orders.push(this.products)
    }
    else {
      for (let x of this.productList) {
        this.sum += x.price * x.count
        x['deliverDate'] = this.dates
        this.useres[0].orders.push(x)
        this.useres[0].cart = []
      }
    }

    this.main.updateOrdersUser(this.useres[0], id).subscribe(() => {
      this.moadlservice.open(popover, { size: 'sm' })
      setTimeout(() => {
        this.moadlservice.dismissAll()
      }, 1000)
      this.router.navigate(['/dashboard'])
    })

  }
  counter(value: any) {
    if (value == "+") {
      this.count++
    }
    else if (value == '-') {
      if (this.count > 1) {
        this.count--
      }
    }

  }
}
