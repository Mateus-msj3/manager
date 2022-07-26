import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NewSectorComponent} from "../new-sector/new-sector.component";
import {DashboardComponent} from "../../dashboard/dashboard.component";
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FieldsetModule} from 'primeng/fieldset';



const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "new-sector", component: NewSectorComponent},
];

@NgModule({
  declarations: [
    NewSectorComponent,
  ],
  exports: [
    NewSectorComponent,
    RouterModule,
  ],
  providers:[

  ],
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    FieldsetModule,
  ]
})
export class SectorModule { }
