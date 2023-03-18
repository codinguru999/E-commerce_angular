import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { LogingrdGuard } from '../utils/guards/login1/logingrd.guard';
import { LoginguardGuard } from '../utils/guards/login/loginguard.guard';
import { NoRouteComponent } from '../components/no-route/no-route.component';
import { NorouteGuard } from '../utils/guards/noroute/noroute.guard';
import { SignupComponent } from '../components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, canActivate: [LoginguardGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginguardGuard] },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [LogingrdGuard]
  },
  { path: '**', component: NoRouteComponent, canActivate: [NorouteGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
