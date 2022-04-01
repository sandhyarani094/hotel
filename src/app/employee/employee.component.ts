import { Component, OnInit, ViewChild } from '@angular/core';
import { LmsComponent } from '../lms/lms.component';
import { EmployeeService } from '../../services/employee/employee.service'


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  model = {"dateOfJoining": new Date(),
  "dateOfRelive": null,
  "designation": '',
  "employeeAge": 0,
  "employeeId": 0,
  "employeeName": '',
  "employeeSalary": 0,
  "employmentStatus": true,
  "gender": "string",
  "rating": 0,
  "vaccinationStatus": 'vaccinated' };
  empList = [];
  submitted = false;
  genderList = ['male', 'female'];
  // @ViewChild("childView")lms:LmsComponent;
  constructor(private empService:EmployeeService) { }
  
  ngOnInit(): void {
  }
  newemp() {

  }
  onSubmit() {
    console.table(this.model);
    this.empService.addEmployee(this.model).subscribe((result)=>{
      console.log("result: ",result);
    })
  }
  // getAlertFromLms(){
  //   this.lms.show();
  // }
}
