import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SalaryCalc} from './salarycalc/salarycalc.component';
import { AppComponent } from './app.component';
import {SalaryService} from './salarycalc/salary.service';
import { ShopComponent } from './shop/shop.component';
import { Shop1Component } from './shop1/shop1.component';

@NgModule({
  declarations:[AppComponent,SalaryCalc, ShopComponent, Shop1Component],
  imports:[BrowserModule],
  bootstrap:[AppComponent]//,
  //providers:[SalaryService]
})
export class AppModule {
  constructor(){
    console.log('AppModule Loaded...')
  }
}
