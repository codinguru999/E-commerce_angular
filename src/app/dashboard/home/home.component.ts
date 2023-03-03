import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeserviceService } from './homeservice.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // email:any
  product: any
  items:any
  products: any[]=[]
  numbers=[1,2,3,4,5]
  constructor(private serv: HomeserviceService,private modalService: NgbModal) {

  }
  ngOnInit() {
    // console.log("Home component Ng init called")
    this.serv.getProducts().subscribe((data) => {
      this.product = data
      // console.log(data)s
      // console.log(this.product)
      this.changelist(this.product)
    })
  }
  changelist(products: any) {
    let array: object[] = []
    for (let i = 0; i < products.length; i++) {
      // console.log(products[i])
      array.push(products[i])
      // console.log(products[i])
      // console.log(array)

      if ((i + 1) % 4 == 0) {
        // console.log(array)
        this.products.push(array)


        array = []
        // array=[]

      }

    }

  }

  openVerticallyCentered(content:any,item:any) {
    console.log(item)
    this.items=item
		this.modalService.open(content, { centered: true,size:'md' });
	}
}
