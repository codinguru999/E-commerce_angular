import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MainserviceService } from 'src/app/services/main/mainservice.service';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  url = environment.apiURL + '/users'
  products: any
  categories: any
  subject = new ReplaySubject()
  subject1 = new ReplaySubject()
  constructor(private http: HttpClient, private main: MainserviceService) {
    this.getProduct()
    this.getCategory()
  }
  getUser(key: any) {
    return this.http.get(this.url + '?email=' + key)
  }
  ngOnInit() {
  }
  getProduct() {
    this.main.getProducts().subscribe((data) => {
      this.products = data
      this.subject.next('true')
    })
  }
  getCategory() {
    this.main.getCategories().subscribe((data) => {
      this.categories = data
      this.subject1.next('true')
    })
  }
  returnProducts() {
    return this.products
  }
}
