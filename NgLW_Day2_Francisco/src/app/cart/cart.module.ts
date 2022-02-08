import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartCountComponent } from './cart-count/cart-count.component';



@NgModule({
  declarations: [
    CartPageComponent,
    CartCountComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartCountComponent
  ]
})
export class CartModule { }
