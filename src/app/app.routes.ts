import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'SignUp', component: SignupPageComponent},
    {path: 'SignIn', component: LoginPageComponent},
];
