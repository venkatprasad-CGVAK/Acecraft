import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AccountsOrdersComponent } from './contact/Help/accounts-orders/accounts-orders.component';
import { OthersComponent } from './contact/Help/others/others.component';
import { PaymentComponent } from './contact/Help/payment/payment.component';
import { ShippingComponent } from './contact/Help/shipping/shipping.component';
import { ProductsComponent } from './products/products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';

const routes: Routes = [
  {path:"account-orders",component:AccountsOrdersComponent},
  {path:"payment",component:PaymentComponent},
  {path:"others",component:OthersComponent},
  {path:"shipping",component:ShippingComponent},
  {path:"contact",component:ContactComponent},
  {path:"product",component:ProductsComponent},
  {path:"viewProduct/:id",component:ViewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
