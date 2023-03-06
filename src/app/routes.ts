import { LoginComponent } from "./login/login.component";
// import { ProductsComponent } from "./products/products.component";
// import {Lo}
import { Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { LoginguardGuard } from "./loginguard.guard";
import { NoRouteComponent } from "./no-route/no-route.component";
import { LogingrdGuard } from "./logingrd.guard";

export const routerList :Routes = [
    { path: '', component: SignupComponent,canActivate: [LoginguardGuard] },
    { path: 'signup', component: SignupComponent,canActivate: [LoginguardGuard] },
    { path: 'login', component: LoginComponent ,canActivate: [LoginguardGuard]},
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [LogingrdGuard]
    },
    {path:'**',component:NoRouteComponent,canActivate: [LoginguardGuard]}
    // 

    // {path :'products', component:ProductsComponent},
]