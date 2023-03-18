import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product:any;
  @Output() modalopen=new EventEmitter<any>()
  @Output() imageopen=new EventEmitter<any>()
  numbers=[1,2,3,4,5]
  openmodal(item:any){
    this.modalopen.emit(item)
  }
  openimage(img:any){
    this.imageopen.emit(img)
  }
}
