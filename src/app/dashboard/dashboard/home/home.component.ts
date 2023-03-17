import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardServiceService } from '../dashboard-service.service';
// import { NgbdCarouselPause } from '../dashboard/carosal';
// import { ModalServiceService } from '../dashboard/modal/modal-service.service';
import { ModalComponent } from '../modal/modal.component';
import { HomeserviceService } from './homeservice.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  // email:any
  product: any
  items: any
  products: any[] = []
  numbers = [1, 2, 3, 4, 5]
  image: any
  constructor(private serv: HomeserviceService, private modalService: NgbModal, private dashboard: DashboardServiceService) {

  }
  @ViewChild('content')
  content!: ModalComponent;


  ngOnInit() {
    // this.serv.getProducts().subscribe((data) => {
    //   this.product = data
    //   this.changelist(this.product)
    // })
    console.log('ng Init called');
    this.dashboard.subject.subscribe( {
      next:(v)=>{
        console.log('subscribed');
        this.product = this.dashboard.returnProducts()
        this.changelist(this.product)
      }
    })
    localStorage.setItem('buy', JSON.stringify(false))

  }
  changelist(products: any) {
    this.serv.length = products.length
    let array: object[] = []
    for (let i = 0; i < products.length; i++) {
      array.push(products[i])


      if ((i + 1) % 4 == 0) {

        this.products.push(array)


        array = []


      }

    }

  }

  openVerticallyCentered(content: any, item: any) {

    this.items = item
    this.modalService.open(content, { centered: true, size: 'md' })


  }
  closeModal(content: any) {
    this.modalService.dismissAll(content)
  }
  openmodal(pop: any) {

    this.modalService.open(pop, { size: 'sm' })
    setTimeout(() => { this.modalService.dismissAll() }, 1000)

  }
  openimage(imag: any, image: any) {
    this.image = image
    this.modalService.open(imag, { size: 'sm', centered: true })
  }
}
