import { LoginComponent } from "./login/login.component";
import { LoginguardGuard } from "./loginguard.guard";
// import { ProductsComponent } from "./products/products.component";
// import {Lo}
import { SignupComponent } from "./signup/signup.component";

export const routerList = [
    { path: '', component: SignupComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [LoginguardGuard]
    }
    // {path :'products', component:ProductsComponent},
]