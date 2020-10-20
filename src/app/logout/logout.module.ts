import { NgModule } from '@angular/core';
import {LogoutComponent} from './logout/logout.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LogoutRoutingModule} from './logout-routing.module';



@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LogoutRoutingModule
  ]
})
export class LogoutModule { }
