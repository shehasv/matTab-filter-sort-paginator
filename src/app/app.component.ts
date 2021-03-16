import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{


  constructor(private employeeService:EmployeeService){}


  employeeData:Employee[];


  displayedColumns: string[] = ['id', 'name'];

  dataSource;

  ngOnInit(): void {
    
    this.employeeData = this.employeeService.getEmployeeData()
    this.dataSource = new MatTableDataSource(this.employeeData);
    
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    
  }



}
