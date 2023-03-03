import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
url="http://localhost:3000/products"
  constructor(private http:HttpClient) { }
  ngOnInit(){
  }
  getProducts(){
    return this.http.get(this.url)
  }
}
