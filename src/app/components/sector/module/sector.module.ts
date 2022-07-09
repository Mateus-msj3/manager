import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewSectorComponent} from "../new-sector/new-sector.component";
import {InputTextModule} from 'primeng/inputtext';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from "../../dashboard/dashboard.component";


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
    RouterModule.forRoot(routes)
  ]
})
export class SectorModule { }
