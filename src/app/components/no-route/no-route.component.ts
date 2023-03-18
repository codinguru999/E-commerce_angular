import { Component } from '@angular/core';
import { MainserviceService } from '../../services/main/mainservice.service';

@Component({
  selector: 'app-no-route',
  templateUrl: './no-route.component.html',
  styleUrls: ['./no-route.component.css']
})
export class NoRouteComponent {
  url: any
  constructor(private main: MainserviceService) {
    console.log('No component works')
    this.main.subject.next('false')
  }
}
