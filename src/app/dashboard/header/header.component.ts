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
  title = 'E-Commerce';
  navbarOpen = false;
  hamburger = false
  islogin = false
  uname: any
  name: any
  username:any
  email:any
  changeclass=true
  constructor(private main: MainserviceService, private router: Router) {
    // console.log("Header construct")
    // console.log("header")
    this.main.subject.subscribe({
      next: (v: any) => {
        // console.log({ v })
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
    // this.main.email

  }
  toggleNavbar() {
    this.hamburger = !this.hamburger;
  }
  getlogin() {
    let login = localStorage.getItem('islogin')
    // console.log(login)
    if (login == null) {
      this.islogin = false
      // this.changeclass=false

    }
    else if (JSON.parse(login) == true) {
      this.islogin = true
      // this.changeclass=false

      this.getUser()
    }
  }
  getUser() {
    this.main.getuser().subscribe((data) => {
      this.username = data
      this.uname = this.username[0].username
      this.name = this.username[0].name['firstname']+" "+this.username[0].name['lastname']
      this.email=this.username[0].email
    })
  }
  logout() {
    this.islogin = false
    this.changeclass=true
    this.main.subject.next('false')
    localStorage.removeItem('islogin')
    localStorage.removeItem('useremail')
    this.username=''
    this.router.navigateByUrl('/login')
  }
  getclass(){
    if(this.changeclass==true){
      return 'container bg-secondary d-none  flex-column position-absolute top-100 end-0 me-3 px-3 py-2 rounded'
    }
    else{
      return 'container bg-secondary d-flex  flex-column position-absolute top-100 end-0 me-3 px-3 py-2 rounded'
    }
  }
}
