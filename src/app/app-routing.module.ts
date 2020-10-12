import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import {LogoutComponent} from './logout/logout/logout.component';
import {JwtGuardGuard} from './guards/jwt-guard.guard';
import {LoggedInGuard} from './guards/logged-in.guard';
import {RegisterComponent} from './register/register.component';
import {MainComponent} from './main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [JwtGuardGuard]},
//  {path: 'login', component: LoginComponent, canActivate: [LoggedInGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
