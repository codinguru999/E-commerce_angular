import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardServiceService } from '../../services/dashboard/dashboard-service.service';
import { HomeserviceService } from '../../services/home/homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // email:any
  product: any
  items: any
  products: any[] = []
  image: any
  constructor(private serv: HomeserviceService, private modalService: NgbModal, private dashboard: DashboardServiceService) {

  }
  @ViewChild('content')
  content!: ElementRef;
  @ViewChild('imageshow')
  imag!: ElementRef;


  ngOnInit() {
    this.dashboard.subject.subscribe({
      next: (v) => {
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

  openVerticallyCentered(item: any) {
    this.items = item
    this.modalService.open(this.content, { centered: true, size: 'md' })
  }
  closeModal(content: any) {
    this.modalService.dismissAll(content)
  }
  openmodal(pop: any) {
    this.modalService.open(pop, { size: 'sm' })
    setTimeout(() => { this.modalService.dismissAll() }, 1000)

  }
  openimage(image: any) {
    this.image = image
    this.modalService.open(this.imag, { size: 'sm', centered: true })
  }
}
