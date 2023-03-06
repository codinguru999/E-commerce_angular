import { Component } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  userdetails: any
  blank = false
  obj: any = {}
  objectKeys = Object.keys;

  constructor(private main: MainserviceService) { }
  ngOnInit() {
    this.main.getuser().subscribe(data => {
      this.userdetails = data
      if (this.userdetails[0].cart[0] === undefined) {
        this.blank = false
      }
      else {
        this.blank = true
      }
      this.userorders(this.userdetails)

    })
  }

  userorders(details: any) {

    this.userdetails = details[0].cart
    for (let ob of this.userdetails) {
      let i = ob.id
      if (i in this.obj) {
        this.obj[i]['count']++
      }
      else {
        ob['count'] = 1
        this.obj[i] = ob
      }
    }
  }
}
