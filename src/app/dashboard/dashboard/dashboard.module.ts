import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
// import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { ModalComponent } from './modal/modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DashboardComponent,FooterComponent,HomeComponent, AboutComponent, CartComponent, CategoryComponent, ModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers:[NgbActiveModal],
  // entryComponents:[ModalComponent]?
})
export class DashboardModule { }
