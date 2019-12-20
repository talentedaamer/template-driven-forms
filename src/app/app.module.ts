import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
/**
 * import angular material modules
 */
import {
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule,
  MatSliderModule,
  MatCheckboxModule,
  MatFormFieldModule,
} from '@angular/material';
import { FormLoginComponent } from './forms/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // angular material modules
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatSliderModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
