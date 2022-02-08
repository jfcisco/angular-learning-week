import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CartItem, Product } from './types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartMap$ = new BehaviorSubject<Map<Product, number>>(
    new Map<Product, number>()
  );

  // Provides the contents of the cart as a list of CartItem objects
  get cart$(): Observable<CartItem[]> {
    return this.cartMap$.pipe(
      map(cartMap => Array.from(cartMap.entries())),
      map(entries => entries.map(([product, quantity]: [Product, number]) => ({ product, quantity })))
    );
  }

  constructor() { }

  addToCart(product: Product, quantity: number) {
    if (!this.cartMap$.value.has(product)) {
      // Initialize entry of the product in the cart
      this.cartMap$.value.set(product, 0);
    }
    
    // At this point, we are sure that quantity is not undefined
    const currentQuantity = this.cartMap$.value.get(product) as number; 
    this.cartMap$.value.set(product, currentQuantity + quantity);
    this.cartMap$.next(this.cartMap$.value);
  }
}
