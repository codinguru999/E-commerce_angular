import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from 'src/app/utils/users';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {
  url = environment.apiURL
  data: any
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  ngOnItit() {

  }
  getItem(key: any) {
    console.log(this.url);
    return this.http.get(this.url + "/users?email=" + key);
  }
  findItem(_key: any, getdata: any) {
    console.log(getdata[0])
    if (getdata[0] !== undefined) {
      return true
    }
    else {
      return false
    }
  }
  setItem(name: string, email: string, password: string) {
    let user: user = {
      address: {
        geolocation: {
          lat: 0,
          long: 0
        },
        city: '',
        street: '',
        number: 0,
        zipcode: undefined
      },
      id: 0,
      email: '',
      username: '',
      password: '',
      name: {
        firstname: '',
        lastname: ''
      },
      phone: undefined,
      __v: 0,
      cart: undefined,
      orders: undefined
    }
    user.address.geolocation.lat = -37.3159
    user.address.geolocation.long = 81.1496
    user.address.city = "kilocoole"
    user.address.street = "new road"
    user.__v = 0
    user.address.number = 7682
    user.address.zipcode = 12926 - 3874
    user.cart = []
    user.orders = []
    user.email = email
    user.username = name
    user.password = password
    user.name.firstname = name
    user.name.lastname = "doe"
    user.phone = 1 - 570 - 236 - 7033
    this.http.post(this.url + '/users', user, this.httpOptions).subscribe(data => {
      this.data = data
    })
  }
}
