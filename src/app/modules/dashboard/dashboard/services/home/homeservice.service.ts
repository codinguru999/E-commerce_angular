import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  length: any
  url = environment.apiURL + '/products'
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  getProducts() {
    return this.http.get(this.url)
  }
}
