import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms'
import { StudentDetailsComponent } from './student-details/student-details.component';
import{ReactiveFormsModule} from '@angular/forms';

import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentDataComponent } from './student-data/student-data.component';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    StudentDetailsComponent,
    StudentDataComponent,
  //  CUSTOM_ELEMENTS_SCHEMA[]

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
