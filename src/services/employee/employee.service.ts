import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl="http://localhost:8080/emp/";
  constructor(private http: HttpClient) { }
  getAllEmployee(){
    return this.http.get(this.baseUrl+'getAllEmployee');
  }
  addEmployee(employeeDetails){
    return this.http.post(this.baseUrl+'addEmployee',employeeDetails);
  }
}
