import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { MainserviceService } from 'src/app/services/main/mainservice.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
url="http://localhost:3000/users"
products:any
categories:any
subject=new ReplaySubject()
subject1=new ReplaySubject()
  constructor(private http:HttpClient,private main:MainserviceService) { 
    console.log("Dashboard service Init");
    this.getProduct()
    this.getCategory()
  }
  getUser(key:any){
    // console.log(key)
    return this.http.get(this.url+'?email='+key)
  }
  ngOnInit(){
  }
  getProduct(){
    this.main.getProducts().subscribe((data)=>{
      this.products=data
      // console.log('called');
      
      this.subject.next('true')
    })
  }
  getCategory(){
    this.main.getCategories().subscribe((data)=>{
      this.categories=data
      // console.log(this.categories);
      this.subject1.next('true')
    })
  }
  returnProducts(){
    return this.products
  }
}
