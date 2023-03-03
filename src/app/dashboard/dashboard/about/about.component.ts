import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
userdetails:any
blank=false
constructor(private main:MainserviceService){}
ngOnInit(){
this.main.getuser().subscribe(data=>{
  this.userdetails=data
  this.userorders(this.userdetails)
  
})
}
// constructor() {}

userorders(details:any){
  this.userdetails=details[0].cart
  console.log(this.userdetails)
}
// if (this.userdet==0) {
//   blank=true
  
// }
// else{
//   blank=false
// }
}
