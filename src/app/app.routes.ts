import { Routes } from '@angular/router';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProductDetailsComponent } from './dashboard/product-details/product-details.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponentComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: ':productName', component: ProductDetailsComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
