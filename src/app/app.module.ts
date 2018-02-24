import { UserService } from './user-.service';
import { HttpService } from './http.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from './../environments/environment.prod';
import { CommonMaterialModule } from './common-material/common-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { appRoutes } from './app.routing';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BaseComponent } from './base/base.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    BaseComponent
  ],
  imports: [
    // ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    CommonMaterialModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule
  ],
  providers: [ HttpService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
