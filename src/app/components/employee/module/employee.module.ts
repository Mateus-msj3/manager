import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NewEmployeeComponent} from "../new-employee/new-employee.component";
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";

const routes: Routes = [
  {path: "new-employee", component: NewEmployeeComponent}
];

@NgModule({
  declarations: [
    NewEmployeeComponent,
  ],
  providers:[],
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forRoot(routes),
        TabViewModule,
        ButtonModule,
        FormsModule,
        InputTextModule,
        CalendarModule,
        DropdownModule,
        RadioButtonModule,
    ]
})
export class EmployeeModule { }
