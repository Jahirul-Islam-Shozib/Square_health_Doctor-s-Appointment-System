import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Header/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { CardComponent } from './Shared_Data/card/card.component';
import { AppointmentDetailsComponent } from './Components/appointment-details/appointment-details.component';
import { CalenderComponent } from './Components/calender/calender.component';
import { UserDetailsDialogComponent } from './Components/user-details-dialog/user-details-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    AppointmentDetailsComponent,
    CalenderComponent,
    UserDetailsDialogComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
