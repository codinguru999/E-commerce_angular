import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardServiceService } from '../../services/dashboard/dashboard-service.service';
import { DashboardComponent } from '../../dashboard.component';
import { ModalComponent } from '../childComponents/modal/modal.component';
import { CategoryServiceService } from '../../services/category/category-service.service';
// import { NgbdPopoverTarget}

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
  // modalService: any;
  @ViewChild('content')
  content!: ElementRef;
  @ViewChild('imageshow')
  imag!: ElementRef;
  constructor(private service: CategoryServiceService,private modalService:NgbModal,private dashboard: DashboardComponent,private dashbrd: DashboardServiceService) {
    // console.log("Category page Called")

  }
  ngOnInit() {
    // console.log('data')
    localStorage.setItem('buy',JSON.stringify(false))
    this.dashbrd.subject.subscribe( {
      next:(v)=>{
        this.prod = this.dashbrd.returnProducts()
      }
    })
    this.dashbrd.subject1.subscribe({
      next:(v)=>{
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
   let modalref= this.modalService.open(this.content,{centered:true,size:'md'});
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
