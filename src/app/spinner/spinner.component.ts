import { Component } from '@angular/core';
import { LoaderService } from '../services/loader/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  load:any
  constructor(public loader: LoaderService) { 
    this.loader.subject.subscribe(()=>{
      this.load=this.loader.getLoading()

    })
    this.load=this.loader.getLoading()
  }
  
}
