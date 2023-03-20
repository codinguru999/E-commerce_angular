import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  email: any
  loggined = false
  locaData:string|undefined|any
  constructor(private http: HttpClient) { }
  subject = new Subject()
  url=environment.apiURL
  setSubject() {
    this.subject.next('true')
  }
  getuser() {
    this.locaData=localStorage.getItem('useremail')
    this.email=JSON.parse(this.locaData)
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
