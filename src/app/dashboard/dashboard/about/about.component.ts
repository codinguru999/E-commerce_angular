import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
numbers=[1,2,3,4,5]
objectKeys = Object.keys;

constructor(private main:MainserviceService,private router:Router){}
ngOnInit(){
this.main.getuser().subscribe(data=>{
  this.userdetails=data
  if(this.userdetails[0].orders[0]===undefined){
    this.blank=false
  }
  else{
    this.blank=true
  }
  this.userorders(this.userdetails)
  
})
}

userorders(details:any){
  
  this.obj=details[0].orders
  
}
buyProduct(item: any) {
  // this.removeItem(item)
  this.router.navigateByUrl('/dashboard/buy/' + item.id)
}

}
