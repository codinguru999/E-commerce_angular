import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardServiceService } from '../../services/dashboard/dashboard-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: any=[]
  products: any = Object
  product: any
  prod:any=[]
  items: any
  image: any;
  @ViewChild('content')
  content!: ElementRef;
  @ViewChild('imageshow')
  imag!: ElementRef;
  constructor(private modalService:NgbModal,private dashbrd: DashboardServiceService) {
  }
  ngOnInit() {
    localStorage.setItem('buy',JSON.stringify(false))
    this.dashbrd.subject.subscribe( {
      next:()=>{
        this.prod = this.dashbrd.returnProducts()
      }
    })
    this.dashbrd.subject1.subscribe({
      next:()=>{
        this.categories=this.dashbrd.categories
        this.getproduct()
      }
    })
    
  }
  getproduct(){
    let array=[]
    for (let category of this.categories) {
        array=this.prod.filter((x:any)=>x.category===category)
        this.product=array
        this.products[category] = this.product.slice(0, 4)
    }
  }
  openVerticallyCentered(item: any) {
    // console.log(item)
    this.items = item
  }
  closeModal(content : any){
    this.modalService.dismissAll(content)
  }
  openmodal(pop:any)
  {this.modalService.dismissAll()
    this.modalService.open(pop,{size:'sm'})
   setTimeout(()=>{this.modalService.dismissAll()},1000) 

  }
  openimage(image:any){
    this.image=image
        this.modalService.open(this.imag,{size:'sm',centered:true})
      }
}
