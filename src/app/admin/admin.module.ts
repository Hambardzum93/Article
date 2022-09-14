import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AdminLayoutComponent} from './components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';
import {CreatePageComponent} from './components/create-page/create-page.component';
import {EditPageComponent} from './components/edit-page/edit-page.component';
import {SharedModule} from "../main/shared/shared.module";
import {AuthGuard} from "./guards/auth.guard";
import { RegisterComponent } from './components/register/register.component';
import { SearchPipe } from './pipes/search.pipe';
import { AlertComponent } from './components/alert/alert.component';
import {AlertService} from "./services/alert.service";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    RegisterComponent,
    SearchPipe,
    AlertComponent
  ],
  providers: [
    AuthGuard,
    AlertService
  ]
})

export class AdminModule {

}
