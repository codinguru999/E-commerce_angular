import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean = false;

  constructor() { }
  subject = new Subject()
  setLoading(loading: boolean) {
    this.loading = loading;
    this.subject.next(this.loading)
  }
  getLoading(): boolean {
    return this.loading;
  }
}
