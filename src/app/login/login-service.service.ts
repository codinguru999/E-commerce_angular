import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

url="http://localhost:3000/users"
loginValid=false
  constructor(private http: HttpClient) { }
  ngOnItit(){
    
  }
  getItem(key:any){

    return this.http.get(this.url+"?email="+key)
  }
  findItem(data:any){
    if(data[0]===undefined){
      return true
    }
    return false
  }
}
