import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {
  UIShellModule,
  IconModule,
  ButtonModule,
  InputModule,
  CheckboxModule,
  RadioModule,
} from 'carbon-components-angular';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,
    ButtonModule,
    InputModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    RadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
