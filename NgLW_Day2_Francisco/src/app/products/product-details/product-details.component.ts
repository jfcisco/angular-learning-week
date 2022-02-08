import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/types';

const integerOnlyValidator = (control: AbstractControl) =>
  Math.floor(control.value) !== control.value ? { integer: control.value } : null;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;

  quantityInput = this.fb.control(1, [
    Validators.required,
    Validators.min(1),
    integerOnlyValidator
  ]);
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const maybeRouteId = paramMap.get('id');
      if (!maybeRouteId) return;

      this.product = this.productService.getProductById(+maybeRouteId);
    })
  }

  addToCart() {
    if (!this.product || this.quantityInput.invalid) return;
    this.cartService.addToCart(this.product, this.quantityInput.value);
    this.router.navigate(['']);
  }
}
