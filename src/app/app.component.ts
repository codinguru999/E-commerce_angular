import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any
  islogin = true
  url: any;
  constructor() {
  }
  ngOnInit() {
    this.getlogin()
  }
  getlogin() {
    let login = localStorage.getItem('islogin')
    if (login == null) {
      this.islogin = false
    }
    else if (JSON.parse(login) == true) {
      this.islogin = true
    }
  }
}
