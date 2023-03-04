import { LoginComponent } from "./login/login.component";
// import { ProductsComponent } from "./products/products.component";
// import {Lo}
import { Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { LoginguardGuard } from "./loginguard.guard";

export const routerList = [
    { path: '', component: SignupComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard/dashboard.module').then((m) => m.DashboardModule),
        // canActivate: [LoginguardGuard]
    },
    {path:'**',component:SignupComponent}
    // {path :'products', component:ProductsComponent},
]