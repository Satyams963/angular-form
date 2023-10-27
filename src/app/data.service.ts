import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root',
})
export class DataService {
     employees: any[] = [];

     addEmployee(employee: any) {
          this.employees.push(employee);
     }
}
