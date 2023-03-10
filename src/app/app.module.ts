import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router,CanActivate,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routerList } from './routes';
import { SignupComponent } from './signup/signup.component';
// import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
// import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LoginguardGuard } from './loginguard.guard';
// import { CartComponent } from './cart/cart.component';
// import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { NgbActiveModal, NgbModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { NoRouteComponent } from './no-route/no-route.component';
// import { FooterComponent } from './dashboard/footer/footer.component';
// import { HomeComponent } from './dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,HeaderComponent, NoRouteComponent
    
    
    // ProductsComponent,
    // DashboardComponent,
    // NavComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
     RouterModule.forRoot(routerList),AppRoutingModule, BrowserAnimationsModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule, NgbModule
  ],
  providers: [LoginguardGuard,NgbTooltip],
  bootstrap: [AppComponent]
})
export class AppModule { }
