import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule

  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
