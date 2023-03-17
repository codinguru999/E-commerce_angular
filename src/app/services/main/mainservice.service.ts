import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { count, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  email: any
  loggined = false
  locaData:string|undefined|any
  constructor(private http: HttpClient) { }
  subject = new Subject()
  url='http://localhost:3000'
  setSubject() {
    this.subject.next('true')
  }
  getuser() {
    this.locaData=localStorage.getItem('useremail')
    this.email=JSON.parse(this.locaData)
    // console.log(this.email)
    return this.http.get(this.url+'/users?email=' + this.email)
  }
  updateOrdersUser(product: any, id: any) {
    return this.http.put(this.url+'/users/' + id, product)
  }
  getProducts(){
    return this.http.get(this.url+'/products')
  }
  getCategories(){
    return this.http.get(this.url+'/categories')
  }
}
