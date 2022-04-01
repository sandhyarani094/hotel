import { Component } from '@angular/core';
import { LandingService } from '../services/landing/landing.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timesheet';
  enableDiv=true;
  empList:any;
  clickMe(){
    alert("You have clicked");
  }
  constructor(private landing: LandingService){

   this.landing.getAllEmployee().subscribe((result)=>{
     console.log("result: ",result);
     this.empList=result;
   })
}
}
