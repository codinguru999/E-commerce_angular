import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/services/main/mainservice.service';
import { OrderServiceService } from '../../services/order/order-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  userdetails: any
  blank = false
  sum = 0
  id: any
  obj: any = {}
  date = new Date()
  numbers = [1, 2, 3, 4, 5]
  user: any
  carts: any
  objectKeys = Object.keys;

  constructor(private main: MainserviceService, private router: Router, private order: OrderServiceService) { }
  ngOnInit() {
    localStorage.setItem('buy',JSON.stringify(false))

    this.main.getuser().subscribe(data => {
      this.userdetails = data
      this.user = this.userdetails[0]
      this.id = this.userdetails[0].id
      if (this.userdetails[0].cart[0] === undefined) {
        this.blank = false
      }
      else {
        this.blank = true
        this.userorders(this.userdetails[0], this.id)
      }

    })
  }

  userorders(details: any, id: any) {
    let cart = []
    this.userdetails = details.cart
    for (let ob of this.userdetails) {
      let i = ob.id
      if (i in this.obj) {
        this.obj[i]['count']++
        this.sum += this.obj[i]['price']
      }
      else {
        if (ob['count'] == undefined) {
          ob['count'] = 1
        }
        this.obj[i] = ob
        this.sum += this.obj[i]['price'] * this.obj[i]['count']

      }

    }
    for (let x of Object.values(this.obj)) {
      cart.push(x)
    }
    details.cart = cart
    this.carts = details.cart
    this.main.updateOrdersUser(details, id).subscribe(() => {

    })

  }
  buyProduct(item: any) {
    localStorage.setItem('buy',JSON.stringify(true))
    this.router.navigateByUrl('/dashboard/buy/' + item.id)
  }
  removeItem(item: any) {
    let cart = []
    for (let x of this.user.cart) {
      if (x.id !== item.id) {
        cart.push(x)
      }
    }
    this.user.cart = cart
    this.main.updateOrdersUser(this.user, this.id).subscribe((data) => {
      this.userdetails = data
      if (this.userdetails.cart[0] === undefined) {
        this.blank = false
      }
      else {
        this.blank = true
        this.carts = this.userdetails.cart
      }

    })
  }
  
  multiplebuy() {
    this.order.multipleBuy = true
    this.order.cart = this.carts
    localStorage.setItem('buy',JSON.stringify(true))
    this.router.navigateByUrl('/dashboard/buy')
  }
  addcount(id:any){
    for(let x of this.carts){
      if(x.id==id){
        x.count+=1
        this.sum+=x.price
      }
    }
    this.user.cart=this.carts
  }
  minuscount(id:any){
    for(let x of this.carts){
      if(x.id==id){
        x.count-=1
        this.sum-=x.price
      }
    }
    this.user.cart=this.carts
    
  }
  ngOnDestroy(){
    this.main.updateOrdersUser(this.user,this.id).subscribe(()=>{
    })
  }
}
