import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './Common/nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { AccountsOrdersComponent } from './contact/Help/accounts-orders/accounts-orders.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http'
import { SingleProductComponent } from './products/single-product/single-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { SortPipe } from './Pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactComponent,
    AccountsOrdersComponent,
    ProductsComponent,
    SingleProductComponent,
    ViewProductComponent,
    SortPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
