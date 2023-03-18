import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { ModalComponent } from './components/childComponents/modal/modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselPause } from './components/childComponents/carousal/carosal';
import { NorouteComponent } from './components/noroute/noroute.component';
import { ProductComponent } from './components/childComponents/product/product.component';

// import {}


@NgModule({
  declarations: [
    DashboardComponent, FooterComponent, HomeComponent, AboutComponent, CartComponent, CategoryComponent, ModalComponent, NorouteComponent, ProductComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, NgbdCarouselPause
  ],
  providers: [NgbActiveModal],
  // entryComponents:[ModalComponent]?
})
export class DashboardModule { }
