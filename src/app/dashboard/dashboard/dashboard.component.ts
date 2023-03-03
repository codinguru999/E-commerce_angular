import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from 'src/app/mainservice.service';
import { DashboardServiceService } from './dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 email:any
 name:any
 user:any
 constructor(private route:ActivatedRoute,private dasboard:DashboardServiceService,private main:MainserviceService){}
  ngOnInit(){
    
    // this.email= this.route.queryParamMap.subscribe((param)=>{
    //   this.email=param.get('email')
    //   // console.log(param.get('email'))
    //   this.dasboard.getUser(this.email).subscribe((data)=>{
    //    this.user=data
    //   //  this.setUser(this.user)
    //   this.main.setUser(this.user)
    //   })
    // })
    
  }
  
  // setUser(user:any){
  //   this.name=user[0].username
  //   console.log(this.name)
  // }

}
