import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from 'src/app/users';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
  url = "http://localhost:3000/users"
  // getdata={}
  data: any
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  ngOnItit() {

  }
  getItem(key: any) {
    return this.http.get<user>(this.url + "?email=" + key);
  }
  findItem(key: any, getdata: any) {
    console.log(getdata[0])
    if (getdata[0] !== undefined) {
      return true
    }
    else {
      return false

    }
  }
  setItem(name: string, email: string, password: string) {
    //  let users= localStorage.getItem('users')
    
    //  let user={}
    let user = {
      "address": {
        "geolocation": {
          "lat": "-37.3159",
          "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
      },
      "cart":[],
      "orders":[],
      "email": email,
      "username": name,
      "password": password,
      "name": {
        "firstname": "john",
        "lastname": "doe"
      },
      "phone": "1-570-236-7033",
      "__v": 0
    }
    this.http.post(this.url, user,this.httpOptions).subscribe(data => {
      this.data = data
      // console.log(data)
    })
    //  localStorage.setItem(email,JSON.stringify(user))
  }
}
