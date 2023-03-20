import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../../services/main/mainservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'E-Commerce';
  navbarOpen = false;
  hamburger = false
  islogin = false
  uname: any
  name: any
  username: any
  email: any
  changeclass = true
  constructor(private main: MainserviceService, private router: Router) {
    this.main.subject.subscribe({
      next: (v: any) => {
        if (v == null || v == 'false') {
          this.islogin = false
          localStorage.clear()
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
  }

  toggleNavbar() {
    this.hamburger = !this.hamburger;
  }

  getlogin() {
    let login = localStorage.getItem('islogin')
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
      this.uname = this.username[0]?.username
      this.name = this.username[0]?.name['firstname'] + " " + this.username[0].name['lastname']
      this.email = this.username[0]?.email
    })
  }

  logout() {
    this.islogin = false
    this.changeclass = true
    this.hamburger = !this.hamburger
    this.main.subject.next('false')
    localStorage.removeItem('islogin')
    localStorage.removeItem('useremail')
    this.username = ''
    this.router.navigateByUrl('/login')
  }

  getclass() {
    if (this.changeclass == true) {
      return 'container hoverel d-none  flex-column position-absolute top-100 end-0 me-3 px-3 py-2 rounded'
    }
    else {
      return 'container hoverel d-flex  flex-column position-absolute top-100 end-0 me-3 px-3 py-2 rounded'
    }
  }
  
  hidetoggle() {
    if (this.hamburger == true) {
      this.hamburger = false
    }
  }
}
