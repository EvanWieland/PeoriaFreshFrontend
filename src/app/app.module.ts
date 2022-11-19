import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './auth/profile/profile.component';
import {AuthInterceptorProvider} from "./auth/auth.interceptor";
import {HeaderComponent} from "./header/header.component";
import {AdminComponent} from './admin/admin.component';
import {DistributorComponent} from './distributor/distributor.component';
import {ProducerComponent} from './producer/producer.component';
import {ConsumerComponent} from './consumer/consumer.component';
import {NgbAccordion, NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import { RequestComponent } from './consumer/request/request.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    HeaderComponent,
    DistributorComponent,
    ProducerComponent,
    ConsumerComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbAlertModule,
    ReactiveFormsModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
