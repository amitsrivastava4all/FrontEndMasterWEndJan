import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomermainComponent } from './customermain.component';
import { CustomeraddComponent } from './customeradd/customeradd.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerviewComponent } from './customerview/customerview.component';
import { CustomereditComponent } from './customeredit/customeredit.component';
import { NavComponent } from './ui/nav/nav.component';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '../HttpLoaderFactory';
const routes: Routes = [{path:'',component:CustomeraddComponent},{path:'list',component:CustomerlistComponent},{path:'view',component:CustomerviewComponent},{path:'edit',component:CustomereditComponent}];

@NgModule({
  declarations:[CustomermainComponent, CustomeraddComponent, CustomerlistComponent, CustomerviewComponent, CustomereditComponent, NavComponent],
  imports: [RouterModule.forRoot(routes), CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule, TranslateModule.forRoot({loader:{
    provide:TranslateLoader, useFactory:HttpLoaderFactory,deps:[HttpClient]
  }})],


exports: [RouterModule,CustomermainComponent]
})
export class CustomerRoutingModule { }

