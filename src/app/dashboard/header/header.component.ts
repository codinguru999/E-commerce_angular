import { AfterContentInit, AfterViewInit, Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Input() username:any;
  // username:any
  title = 'Prafull Mangla';
  navbarOpen = false;
  hamburger = false
  islogin = false
  username: any
  constructor(private main: MainserviceService, private router: Router) {
    // console.log("Header construct")
    // console.log("header")
    this.main.subject.subscribe({
      next: (v: any) => {
        console.log({ v })
        if (v == null || v == 'false') {
          this.islogin = false
        }
        else {
          this.islogin = true
          this.getlogin()
        }
      }
    })
  }

  ngOnInit() {
    this.getlogin()
    // this.main.email

  }
  toggleNavbar() {
    this.hamburger = !this.hamburger;
  }
  getlogin() {
    let login = localStorage.getItem('islogin')
    console.log(login)
    if (login == null) {
      this.islogin = false
    }
    else if (JSON.parse(login) == true) {
      this.islogin = true
      this.getUser()
    }
  }
  getUser() {
    this.main.getuser().subscribe((data) => {
      this.username = data
      this.username = this.username[0].username
    })
  }
  logout() {
    this.islogin = false
    this.main.subject.next('false')
    localStorage.removeItem('islogin')
    localStorage.removeItem('useremail')
    this.username=''
    this.router.navigateByUrl('/login')
  }
}
