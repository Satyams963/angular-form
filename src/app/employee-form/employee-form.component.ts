// employee-form.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
     selector: 'app-employee-form',
     templateUrl: './employee-form.component.html',
})
export class EmployeeFormComponent {
     employeeForm: FormGroup;

     constructor(private fb: FormBuilder, private dataService: DataService) {
          this.employeeForm = this.fb.group({
               employeeName: ['', [Validators.required]],
               employeeAddress: ['', [Validators.required]],
               employeePhoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
               employeeDob: ['', [Validators.required]],
               employeeEmail: ['', [Validators.required, Validators.email]],
          });
     }

     onSubmit() {
          if (this.employeeForm.valid) {
               const formValue = this.employeeForm.value;
               this.dataService.addEmployee(formValue);
               console.log('Form Data:', formValue);
          }
     }
}
