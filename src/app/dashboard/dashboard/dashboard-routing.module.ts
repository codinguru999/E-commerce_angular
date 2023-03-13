import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginguardGuard } from 'src/app/loginguard.guard';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from './about/about.component';
import { BuyComponent } from './buy/buy.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: 'orders', component: AboutComponent },
      { path: 'buy', component: BuyComponent },
      { path: 'buy/:id', component: BuyComponent },
      { path: 'cart', component: CartComponent },
      { path: 'category', component: CategoryComponent },
      // {path:'dashboard/home/:name',component:HomeComponent},
      { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
      {path:"**" ,redirectTo: '/dashboard/home', pathMatch: 'full' }

    ]
  },
  // {path:"",redirectTo:"/dashboard",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
