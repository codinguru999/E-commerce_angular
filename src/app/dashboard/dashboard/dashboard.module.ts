import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from '../../footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { ModalComponent } from './modal/modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselPause } from './carousal/carosal';
import { NorouteComponent } from './noroute/noroute.component';
import { ProductComponent } from './product/product.component';

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
