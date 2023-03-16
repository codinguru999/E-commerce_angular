import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { MainserviceService } from 'src/app/mainservice.service';
// import { DashboardServiceService } from './dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 email:any
 name:any
 user:any
 ngOnInit(){
  // localStorage.setItem('buy',JSON.stringify(false))
 }
//  constructor(private route:ActivatedRoute,private dasboard:DashboardServiceService,private main:MainserviceService){}
  

}
