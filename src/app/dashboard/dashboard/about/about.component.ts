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
obj:any={}
objectKeys = Object.keys;

constructor(private main:MainserviceService){}
ngOnInit(){
this.main.getuser().subscribe(data=>{
  this.userdetails=data
  // console.log(this.userdetails[0].orders[0])
  if(this.userdetails[0].orders[0]===undefined){
    this.blank=false
  }
  else{
    this.blank=true
  }
  this.userorders(this.userdetails)
  
})
}
// constructor() {}

userorders(details:any){
  
  this.userdetails=details[0].orders
  // this.userdetails.group()
  // console.log(this.userdetails)
  for (let ob of this.userdetails){
    let i=ob.id
    if(i in this.obj){
      this.obj[i]['count']++
    }
    else{
      ob['count']=1
      this.obj[i]=ob
    }
  }
  console.log(this.obj)
}
// if (this.userdet==0) {
//   blank=true
  
// }
// else{
//   blank=false
// }
}
