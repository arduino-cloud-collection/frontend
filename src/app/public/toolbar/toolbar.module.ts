import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { UserdropdownComponent } from './userdropdown/userdropdown.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [ToolbarComponent, UserdropdownComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule

  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
