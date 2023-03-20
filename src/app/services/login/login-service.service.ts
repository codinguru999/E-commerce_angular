import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url = environment.apiURL
  loginValid = false
  constructor(private http: HttpClient) { }
  ngOnItit() {

  }
  getItem(key: any) {
    return this.http.get(this.url + '/users' + "?email=" + key)
  }
  findItem(data: any) {
    if (data[0] === undefined) {
      return true
    }
    return false
  }
}
