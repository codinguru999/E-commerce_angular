import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-no-route',
  templateUrl: './no-route.component.html',
  styleUrls: ['./no-route.component.css']
})
export class NoRouteComponent {
  url:any
constructor(private main:MainserviceService){
  console.log('No component works')
  this.main.subject.next('false')
}
}
