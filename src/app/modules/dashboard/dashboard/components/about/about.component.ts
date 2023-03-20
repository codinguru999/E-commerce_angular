import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/services/main/mainservice.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  userdetails: any
  blank = false
  obj: any = {}
  numbers = environment.numberList
  objectKeys = Object.keys;

  constructor(private main: MainserviceService, private router: Router) { }
  ngOnInit() {
    localStorage.setItem('buy', JSON.stringify(false))
    this.main.getuser().subscribe(data => {
      this.userdetails = data
      if (this.userdetails[0].orders[0] === undefined) {
        this.blank = false
      }
      else {
        this.blank = true
      }
      this.userorders(this.userdetails)

    })
  }

  userorders(details: any) {
    this.obj = details[0]?.orders
  }
  buyProduct(item: any) {
    localStorage.setItem('buy', JSON.stringify(true))
    this.router.navigateByUrl('/dashboard/buy/' + item.id)
  }

}
