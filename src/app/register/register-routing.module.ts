import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoggedInGuard} from '../guards/logged-in.guard';


const routes: Routes = [
  {path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
