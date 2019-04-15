import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomerRoutingModule } from './customermain/customer-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    CustomerRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
