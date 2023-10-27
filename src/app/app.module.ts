import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

@NgModule({
     declarations: [
          AppComponent,
          EmployeeFormComponent,
          EmployeeTableComponent
     ],
     imports: [
          BrowserModule,
          ReactiveFormsModule,
          AppRoutingModule
     ],
     providers: [],
     bootstrap: [AppComponent]
})
export class AppModule { }
