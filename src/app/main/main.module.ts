import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MainRoutingModule} from './main-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MainComponent} from './main/main.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {ToolbarModule} from '../public/toolbar/toolbar.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { ControllercardComponent } from './controllercard/controllercard.component';
import { SinglecontrollerComponent } from './singlecontroller/singlecontroller.component';
import {DialogCreationComponent, NewcontrollerComponent} from './newcontroller/newcontroller.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    ControllercardComponent,
    SinglecontrollerComponent,
    NewcontrollerComponent,
    DialogCreationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MainRoutingModule,
    ToolbarModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule


  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
