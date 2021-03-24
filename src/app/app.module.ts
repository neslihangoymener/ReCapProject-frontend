import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from "@angular/forms"

import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {ToastrModule} from "ngx-toastr";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/carDetail/carDetail.component';
import { NaviComponent } from './components/navi/navi.component';

import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';


import { CartSummaryComponent } from './components/cart-summary/cart-summary.component'


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    CarDetailComponent,
    FilterBrandPipe,
    FilterColorPipe,
    CarFilterComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }