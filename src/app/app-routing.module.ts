import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TsheetComponent } from './tsheet/tsheet.component';
import { LmsComponent } from './lms/lms.component';
import { BmcComponent } from './bmc/bmc.component';
import { NsaComponent } from './nsa/nsa.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: HomeComponent },
  { path: 'tsheet', component: TsheetComponent },
  { path: 'lms', component: LmsComponent },
  { path: 'bms', component: BmcComponent },
  { path: 'nsa', component: NsaComponent },
  { path: 'emp', component: EmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
