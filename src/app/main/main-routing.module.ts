import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JwtGuardGuard} from '../guards/jwt-guard.guard';
import {MainComponent} from './main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [JwtGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
