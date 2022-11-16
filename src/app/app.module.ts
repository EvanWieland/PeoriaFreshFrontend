import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
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
    ConsumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
