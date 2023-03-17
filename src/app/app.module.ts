import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginguardGuard } from './guards/login/loginguard.guard';
import { HeaderComponent } from './header/header.component';
import { NgbModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { NoRouteComponent } from './no-route/no-route.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './interceptor/loading/loading.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent, HeaderComponent, NoRouteComponent, SpinnerComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
     AppRoutingModule, BrowserAnimationsModule,NgbModule
  ],
  providers: [LoginguardGuard, NgbTooltip,{
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
