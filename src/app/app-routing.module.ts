import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'restaurants', component:RestaurantsComponent },
  { path:'employee', component:EmployeesComponent},
  { path:'login', component:LoginComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
