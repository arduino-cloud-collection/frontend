import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import {SettingsRoutingModule} from './settings-routing.module';
import {ToolbarModule} from '../public/toolbar/toolbar.module';


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ToolbarModule
  ]
})
export class SettingsModule { }
