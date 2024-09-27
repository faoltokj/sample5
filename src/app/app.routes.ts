import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './component/account-list/account-list.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { DepositAmountComponent } from './component/deposit-amount/deposit-amount.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },  // Redirect to home by default
  { path: 'home', component: HomePageComponent,
    children: [
      { path: 'account', component: AccountListComponent },  // Account List as child route
      { path: 'create-account', component: CreateAccountComponent }  // Create Account as child route
    ]
   },
  // { path: 'account', component: AccountListComponent },
  // { path: 'create-account', component: CreateAccountComponent },
  { path: 'deposite-amount/:id', component: DepositAmountComponent }
]

