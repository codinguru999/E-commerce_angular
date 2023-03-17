import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MainserviceService } from './services/main/mainservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any
  islogin = true
  url: any;
  constructor(private router: Router ,private main: MainserviceService) {
  }
  ngOnInit() {


    this.getlogin()
   
  }
  getlogin() {
    // console.log("app component renders")
    let login = localStorage.getItem('islogin')
    // console.log(login)
    if (login == null) {
      this.islogin = false
    }
    else if (JSON.parse(login) == true) {
      // console.log('true')
      this.islogin = true
    }
  }
}
