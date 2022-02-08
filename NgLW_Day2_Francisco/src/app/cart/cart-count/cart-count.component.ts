import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart-count',
  templateUrl: './cart-count.component.html',
  styleUrls: ['./cart-count.component.scss']
})
export class CartCountComponent implements OnInit, OnDestroy {
  cartCount$ = this.cartService.cart$.pipe(
    map(cart => cart.reduce<number>((acc, item) => acc + item.quantity, 0))
  );

  constructor(private cartService: CartService) { }
 

  ngOnInit(): void {
    this.cartService.cart$.subscribe()
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
