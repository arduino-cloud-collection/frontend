import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import {SettingsRoutingModule} from './settings-routing.module';
import {ToolbarModule} from '../public/toolbar/toolbar.module';
import { UsercardComponent } from './usercard/usercard.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [SettingsComponent, UsercardComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SettingsModule { }
