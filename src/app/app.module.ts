import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
