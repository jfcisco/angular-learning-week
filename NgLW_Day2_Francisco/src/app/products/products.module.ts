import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
