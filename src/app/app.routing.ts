import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'register', component: RegistrationComponent
    }, {
        path: 'login', component: LoginComponent
    }, {
        path: '404', component: NotFoundComponent
    }, {
        path: 'dashboard', component: DashboardComponent
    }, {
        path: '**', redirectTo: '404', pathMatch: 'full'
    },
];
