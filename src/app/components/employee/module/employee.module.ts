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
import {ListEmployeeComponent} from "../list-employee/list-employee.component";
import {FieldsetModule} from "primeng/fieldset";

const routes: Routes = [
  {path: "new-employee", component: NewEmployeeComponent},
  {path: "list-employee", component: ListEmployeeComponent},
];

@NgModule({
  declarations: [
    NewEmployeeComponent,
    ListEmployeeComponent,
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
    FieldsetModule,
  ]
})
export class EmployeeModule { }
