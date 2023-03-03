import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  url="http://localhost:3000/products"
  url2="http://localhost:3000/categories"
  products:any[]=[]
  product:any[]=[]
  constructor(private http:HttpClient) { }
  // ngOnInit(){
  //   this.http.get(this.url2).subscribe((data)=>{
  //     console.log(data)
  //   })
  //   this.http.get(this.url).subscribe((data)=>{
  //     console.log(data)
  //   })
  // }
  getCategories(){
    return this.http.get(this.url2)
  }
  getProducts(category:any){
    return this.http.get(this.url+"?category="+category)
  }
}
