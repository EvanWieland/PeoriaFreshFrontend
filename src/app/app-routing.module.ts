import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from "./auth/profile/profile.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AdminComponent} from "./admin/admin.component";
import {DistributorComponent} from "./distributor/distributor.component";
import {ProducerComponent} from "./producer/producer.component";
import {ConsumerComponent} from "./consumer/consumer.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'distributor', component: DistributorComponent},
  {path: 'producer', component: ProducerComponent},
  {path: 'consumer', component: ConsumerComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
