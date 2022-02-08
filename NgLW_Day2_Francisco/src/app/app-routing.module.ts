import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart/cart-page/cart-page.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent, pathMatch: "full" },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
