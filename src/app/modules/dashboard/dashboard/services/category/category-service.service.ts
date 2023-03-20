import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  url = environment.apiURL + '/products'
  url2 = environment.apiURL + '/categories'
  products: any[] = []
  product: any[] = []
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.url2)
  }
  getProducts(category: any) {
    return this.http.get(this.url + "?category=" + category)
  }
}
