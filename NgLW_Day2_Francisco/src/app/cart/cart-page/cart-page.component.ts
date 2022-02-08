import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/types';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription = null!;
  
  cartItems: CartItem[] = [];;

  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
    this.subscription = this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    })
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
