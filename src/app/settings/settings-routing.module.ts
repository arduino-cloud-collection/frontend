import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {JwtGuardGuard} from '../guards/jwt-guard.guard';


const routes: Routes = [
  {path: 'settings', component: SettingsComponent, canActivate: [JwtGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
