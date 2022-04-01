import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExternalModule } from './material-module';
import { TsheetComponent } from './tsheet/tsheet.component';
import { LmsComponent } from './lms/lms.component';
import { BmcComponent } from './bmc/bmc.component';
import { NsaComponent } from './nsa/nsa.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    TsheetComponent,
    LmsComponent,
    BmcComponent,
    NsaComponent,
    HomeComponent,
    PagenotfoundComponent,
    EmployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialExternalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
