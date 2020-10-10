import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {JwtGuardGuard} from './guards/jwt-guard.guard';
import {MainComponent} from './main/main.component';
import {LoggedInGuard} from './guards/logged-in.guard';


const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [JwtGuardGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoggedInGuard]},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
