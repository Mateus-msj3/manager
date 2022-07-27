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
import {CardModule} from "primeng/card";
import {ChipsModule} from "primeng/chips";
import {LoginComponent} from "../../login/login.component";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";
import {ListSectorComponent} from "../list-sector/list-sector.component";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {DialogModule} from "primeng/dialog";
import {RatingModule} from "primeng/rating";
import {ConfirmationService, MessageService} from "primeng/api";
import {MultiSelectModule} from 'primeng/multiselect';



const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "new-sector", component: NewSectorComponent},
  {path: "login", component: LoginComponent},
  {path: "list-sector", component: ListSectorComponent},
];

@NgModule({
  declarations: [
    NewSectorComponent,
    ListSectorComponent,
  ],
  exports: [
    NewSectorComponent,
    RouterModule,
    ListSectorComponent,
  ],
  providers:[
    MessageService,
    ConfirmationService,
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
    CardModule,
    ChipsModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DropdownModule,
    InputNumberModule,
    DialogModule,
    RatingModule,
    MultiSelectModule,
  ]
})
export class SectorModule { }
