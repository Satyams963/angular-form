import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
     selector: 'app-employee-table',
     templateUrl: './employee-table.component.html',
     styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
     constructor(private dataService: DataService) { }

     get employees() {
          return this.dataService.employees;
     }
}
