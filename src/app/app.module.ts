import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MaterialModule} from './shared/modules/material/material.module';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { MymodalComponent } from './mymodal/mymodal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    EmployeesComponent,
    LoginComponent,
    SignupComponent,
    MymodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgbModule
  ],
  entryComponents: [
    MymodalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
