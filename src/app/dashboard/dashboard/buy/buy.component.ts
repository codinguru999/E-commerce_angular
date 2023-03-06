import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import Stepper from 'bs-stepper'


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  constructor(private route:ActivatedRoute){

  }
 

  ngOnInit() {
    console.log("Buy element");
    console.log(this.route.snapshot.paramMap.get('id'))
  
  }


}
