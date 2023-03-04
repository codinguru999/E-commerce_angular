import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { CategoryServiceService } from './category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: any
  products: any = Object
  product: any
  items: any
  numbers = [1, 2, 3, 4, 5]
  // modalService: any;
  constructor(private service: CategoryServiceService,private modalService:NgbModal) {
    // console.log("Category page Called")
  }
  ngOnInit() {
    // console.log('data')
    this.service.getCategories().subscribe((data) => {
      // console.log(data)
      this.categories = data
      for (let category of this.categories) {
        // console.log(category)
        this.service.getProducts(category).subscribe((data) => {
          // console.log(data)
          this.product = data
          this.products[category] = this.product.slice(0, 4)
          // console.log(category,typeof this.products[category])

        })
      }
    })
  }
  openVerticallyCentered(content:any,item: any) {
    // console.log(item)
    this.items = item
   let modalref= this.modalService.open(content,{centered:true,size:'md'});
  //  modalref.componentInstance.items=item
    // this.modal.items=this.items

  }
  closeModal(content : any){
    this.modalService.dismissAll(content)
  }

}
