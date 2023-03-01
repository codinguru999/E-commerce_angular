import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginguardGuard } from 'src/app/loginguard.guard';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
  children:[
    {path:"home",component:HomeComponent},
    {path:'',redirectTo:'/dashboard/home',pathMatch:'full'}
  ]},
  // {path:"",redirectTo:"/dashboard",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
