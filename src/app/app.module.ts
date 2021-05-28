import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { UserBookFlightComponent } from './user-book-flight/user-book-flight.component';
import { UserManageBookingsComponent } from './user-manage-bookings/user-manage-bookings.component';
import { UserBookingHistoryComponent } from './user-booking-history/user-booking-history.component';
import { AdminManageSchedulesComponent } from './admin-manage-schedules/admin-manage-schedules.component';
import { AdminManageAirlinesComponent } from './admin-manage-airlines/admin-manage-airlines.component';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserBookFlightComponent,
    UserManageBookingsComponent,
    UserBookingHistoryComponent,
    AdminManageSchedulesComponent,
    AdminManageAirlinesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    MDBBootstrapModule.forRoot(), NavbarModule, WavesModule, ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
