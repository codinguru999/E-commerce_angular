import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MainserviceService } from './mainservice.service';

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
    // console.log(router.url);
    // router.events.pipe
    // router.events.filter(event => event instanceof NavigationEnd)
    //       .subscribe(event => 
    //        {
    //           this.currentRoute = event.url;          
    //           console.log(event);
    //        });
    this.router.events
      .subscribe(
        (event) => {
          if (event instanceof NavigationStart) {
            console.log(event.url);
            this.url = event.url;
            if(this.url=="/" || this.url==""){
              main.subject.next('false')
              
            }
        }

        });
  }
  ngOnInit() {
    // console.log("app component rednders")

    this.getlogin()
    // console.log(this.route)
    // if(this.route.url==")
    // localStorage.clear()
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
