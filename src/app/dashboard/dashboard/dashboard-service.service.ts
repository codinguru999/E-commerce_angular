import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
url="http://localhost:3000/users"
  constructor(private http:HttpClient) { }
  getUser(key:any){
    console.log(key)
    return this.http.get(this.url+'?email='+key)
  }
}
