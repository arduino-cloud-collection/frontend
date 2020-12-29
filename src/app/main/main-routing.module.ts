import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JwtGuardGuard} from '../guards/jwt-guard.guard';
import {MainComponent} from './main/main.component';
import {SinglecontrollerComponent} from './singlecontroller/singlecontroller.component';
import {NewcontrollerComponent} from './newcontroller/newcontroller.component';
import {EditcontrollerComponent} from './editcontroller/editcontroller.component';


const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [JwtGuardGuard]},
  {path: 'controller/new', component: NewcontrollerComponent, canActivate: [JwtGuardGuard]},
  {path: 'controller/:uuid/edit', component: EditcontrollerComponent, canActivate: [JwtGuardGuard]},
  {path: 'controller/:uuid', component: SinglecontrollerComponent, canActivate: [JwtGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class MainRoutingModule { }
