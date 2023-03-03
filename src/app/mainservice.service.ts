import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { count, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  email: any
  loggined = false
  constructor(private http: HttpClient) { }
  subject = new Subject()
  setSubject() {
    this.subject.next('true')
  }
  getuser() {
    this.email = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('useremail'))))
    // console.log(this.email)
    return this.http.get('http://localhost:3000/users?email=' + this.email)
  }
  updateOrdersUser(product: any, id: any) {
   
    
    return this.http.put('http://localhost:3000/users/' + id, product)


  }
}
