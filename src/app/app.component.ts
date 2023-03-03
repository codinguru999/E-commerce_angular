import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:any
 islogin=true
 ngOnInit(){
  console.log("app component rednders")
  this.getlogin()
 }
  getlogin(){
    let login=localStorage.getItem('islogin')
    console.log(login)
    if(login==null)
    {
      this.islogin=false
    }
    else if(JSON.parse(login)==true){
      console.log('true')
      this.islogin=true
    }
  }
}
