import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminLayoutComponent} from "./components/admin-layout/admin-layout.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {DashboardPageComponent} from "./components/dashboard-page/dashboard-page.component";
import {CreatePageComponent} from "./components/create-page/create-page.component";
import {EditPageComponent} from "./components/edit-page/edit-page.component";
import {AuthGuard} from "./guards/auth.guard";
import {RegisterComponent} from "./components/register/register.component";

const AdminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
      {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
      {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {

}
