import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent, DialogElementsExampleDialog } from './login/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { LogoutComponent } from './logout/logout/logout.component';
import { RegisterComponent } from './register/register/register.component';
import {MatIconModule} from '@angular/material/icon';
import {LoginModule} from './login/login.module';
import {LogoutModule} from './logout/logout.module';
import {RegisterModule} from './register/register.module';
import {MainModule} from './main/main.module';
import {SettingsModule} from './settings/settings.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import * as Sentry from '@sentry/angular';
import {Integrations} from '@sentry/tracing';
import {Router} from '@angular/router';

if (environment.production) {
  Sentry.init({
    dsn: 'http://c34e6f019cbe4b64af5cf878e7543b8f@o485696.ingest.sentry.io/5573762',
    autoSessionTracking: true,
    integrations: [
      new Integrations.BrowserTracing({
        tracingOrigins: ['localhost', 'https://arduinoapi.herokuapp.com/'],
        routingInstrumentation: Sentry.routingInstrumentation,
      }),
    ],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
}

@NgModule({
  declarations: [
    AppComponent,
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
        MatToolbarModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatIconModule,
        LoginModule,
        LogoutModule,
        RegisterModule,
        MainModule,
        SettingsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
