import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/mainservice.service';

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
  carts:any
  objectKeys = Object.keys;

  constructor(private main: MainserviceService, private router: Router) { }
  ngOnInit() {
    this.main.getuser().subscribe(data => {
      this.userdetails = data
      this.user = this.userdetails[0]
      this.id = this.userdetails[0].id
      // console.log(this.id)
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
      // console.log(this.sum);
      // details[0].cart=details[0].cart.filter((x:any)=>{
      //   return x.id==x.id
      // })
      // console.log(details[0].cart

    }
    for (let x of Object.values(this.obj)) {
      // console.log(x)
      cart.push(x)
    }
    details.cart = cart
    // console.log(details.cart)
    this.carts=details.cart
    this.main.updateOrdersUser(details, id).subscribe((data) => {
      // console.log(data)
    })
    // details[0].cart=this.obj
    // console.log(this.obj)
  }
  buyProduct(item: any) {
    this.removeItem(item)
    this.router.navigateByUrl('/dashboard/buy/' + item.id)
  }
  removeItem(item: any) {
    let cart = []
    // console.log(this.user.cart)
    // console.log(item)
    
    for (let x of this.user.cart) {
      // console.log(typeof x.id,typeof item.id)
      if (x.id !== item.id) {
        // console.log("inserted");
        
        cart.push(x)
      }
    }
    
    this.user.cart = cart
    // console.log(this.user.cart);
    // console.log(this.user);
    
    this.main.updateOrdersUser(this.user, this.id).subscribe((data) => {
      // console.log(data)
      this.userdetails = data
      // console.log(this.userdetails);
      
      // this.ngOnInit()
      if(this.userdetails.cart[0]===undefined){
        this.blank=false
      }
      else{
        this.blank=true
        this.carts=this.userdetails.cart
        // this.ngOnInit()
        // this.userorders(this.userdetails, this.userdetails.id)
      }

    })
  }
}
