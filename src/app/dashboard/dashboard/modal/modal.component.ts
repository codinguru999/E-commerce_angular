import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MainserviceService } from 'src/app/services/main/mainservice.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() items: any
  // @Input() popover:any
  @Output() closes = new EventEmitter<any>();
  @Output() popove = new EventEmitter<any>();
  user: any
  numbers=[1,2,3,4,5]
  length=80
  view=true
  constructor(private modalService: NgbModal, public modal: NgbActiveModal, private main: MainserviceService, private router: Router) { }
  
  ngOnInit() {
    this.main.getuser().subscribe((data) => {

      this.user = data
      // console.log(this.user[0])
    })
  }
  updateProduct(item: any) {
    localStorage.setItem('buy',JSON.stringify(true))
    this.router.navigateByUrl('/dashboard/buy/' + item.id)
    this.modalClose()
  }
  updateCartProduct(item: any){

    // console.log(this.user[0]);
    let id = this.user[0].id
    this.user[0].cart.push(item)
    
    this.main.updateOrdersUser(this.user[0], id).subscribe((data) => {
      // console.log(data)
    })
    this.popove.emit()
  }
  modalClose() {
    this.closes.emit()
  }
  showmore(des:string){
    this.view=false
    // console.log(des.length);
    
    
    this.length=des.length
  }
  showless(des:string){
    this.view=true
    // console.log(des.length);
    
    
    this.length=80
  }
}
