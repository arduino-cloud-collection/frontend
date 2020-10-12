import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogoutComponent} from './logout/logout.component';
import {JwtGuardGuard} from '../guards/jwt-guard.guard';


const routes: Routes = [
  {path: 'logout', component: LogoutComponent, canActivate: [JwtGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LogoutRoutingModule { }
