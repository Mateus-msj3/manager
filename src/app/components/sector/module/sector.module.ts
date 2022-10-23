import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NewSectorComponent} from "../new-sector/new-sector.component";
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FieldsetModule} from 'primeng/fieldset';
import {CardModule} from "primeng/card";
import {ChipsModule} from "primeng/chips";
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
import {PanelModule} from 'primeng/panel';
import {MenuModule} from "primeng/menu";
import {InputMaskModule} from "primeng/inputmask";
import {SectorService} from "../service/sector.service";
import {HttpClientModule} from "@angular/common/http";
import {OfficieService} from "../../offices/office/service/officie.service";
import {OfficeModule} from "../../offices/office/module/office.module";

const routes: Routes = [
  {path: "novo-setor", component: NewSectorComponent},
  {path: "listar-setor", component: ListSectorComponent},
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
    SectorService,
    OfficieService
  ],
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    FormsModule,
    RouterModule.forRoot(routes),
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
    OfficeModule,
  ]
})
export class SectorModule { }
