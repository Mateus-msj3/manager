import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfficieService} from "../service/officie.service";
import {NewOfficeComponent} from "../new/new-office/new-office.component";
import {ListOfficeComponent} from "../list/list-office/list-office.component";
import {RouterModule} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RadioButtonModule} from "primeng/radiobutton";
import {FieldsetModule} from "primeng/fieldset";
import {CardModule} from "primeng/card";
import {ChipsModule} from "primeng/chips";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {DialogModule} from "primeng/dialog";
import {RatingModule} from "primeng/rating";
import {PanelModule} from "primeng/panel";
import {MenuModule} from "primeng/menu";
import {InputMaskModule} from "primeng/inputmask";


@NgModule({
  declarations: [
    NewOfficeComponent,
    ListOfficeComponent,
  ],
  exports: [
    NewOfficeComponent,
    ListOfficeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
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
    PanelModule,
    MenuModule,
    InputMaskModule,
  ],
  providers: [
    OfficieService
  ]
})
export class OfficeModule { }
