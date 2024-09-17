import { Routes } from '@angular/router';
import { AccountListComponent } from './component/account-list/account-list.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { CreateAccountComponent } from './component/create-account/create-account.component';

export const routes: Routes = [
    {path:'', component: LandingPageComponent},
    {path:'home', component: HomePageComponent},
  { path: 'account', component: AccountListComponent },
  { path: 'create-account', component: CreateAccountComponent },
];
