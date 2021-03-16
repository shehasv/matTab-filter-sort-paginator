import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }


  employeeData: Employee[] = [

    {id:101, name: "Shehas"},
    {id:102, name: "Basheer"},
    {id:103, name: "Fida"},
    {id:104, name: "Zeenath"},
    {id:105, name: "Test1"},
    {id:106, name: "Test2"},
    {id:107, name: "Test3"},
    {id:108, name: "Test4"},


  ]



  getEmployeeData(){
    return this.employeeData
  }


}
