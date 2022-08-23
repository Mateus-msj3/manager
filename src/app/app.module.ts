import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {SectorModule} from "./components/sector/module/sector.module";
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EmployeeModule} from "./components/employee/module/employee.module";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./shared/services/auth.service";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CardModule,
        InputTextModule,
        ButtonModule,
        MenubarModule,
        TabMenuModule,
        SectorModule,
        EmployeeModule,
        FormsModule,
        DialogModule,
    ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
