import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MainserviceService } from 'src/app/mainservice.service';
// import { ModalServiceService } from './modal-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() items: any
  @Input() numbers: any
  @Output() closes = new EventEmitter<any>();
  user: any
  // modal:NgbActiveModal
  constructor(private modalService: NgbModal, public modal: NgbActiveModal, private main: MainserviceService) { }
  // @ViewChild('content') mymodal: ElementRef | undefined;
  // ngOnChanges(changes: SimpleChanges) {
  //   // console.log(changes)
  //   if (changes['items'].firstChange == false) {

  //     this.modalService.open(this.mymodal, { centered: true, size: 'md' });


  //   }

  // }
  ngOnInit() {
    this.main.getuser().subscribe((data) => {

      this.user = data
      // console.log(this.user[0])
    })
  }
  updateProduct(item: any) {

    // console.log(this.user[0]);
    let id = this.user[0].id
    this.user[0].orders.push(item)
    this.main.updateOrdersUser(this.user[0], id).subscribe((data) => {
      // console.log(data)
    })
  }
  updateCartProduct(item: any) {

    // console.log(this.user[0]);
    let id = this.user[0].id
    this.user[0].cart.push(item)
    this.main.updateOrdersUser(this.user[0], id).subscribe((data) => {
      // console.log(data)
    })
  }
  modalClose(){
    this.closes.emit()
  }
}
