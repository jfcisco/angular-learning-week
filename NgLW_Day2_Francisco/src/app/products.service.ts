import { Injectable } from '@angular/core';
import { Product } from './types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: 'Paldo Lobster King Cup Noodles',
      photo: '/assets/images/128597.jpg',
      price: 64.75
    },
    {
      id: 2,
      name: 'Paldo Cheese Rapasta Cup Noodles',
      photo: '/assets/images/128598.jpg',
      price: 69.75
    },
    {
      id: 3,
      name: 'Ottogi Jin Ramen Hot Cup Noodles',
      photo: '/assets/images/645175570288_-_01.jpg',
      price: 51.75
    },
    {
      id: 4,
      name: 'Nissin Seafood Cup Noodles',
      photo: '/assets/images/106717-01_4_1.jpg',
      price: 119.25
    }
  ];
  
  constructor() { }

  getProductById(id: number) {
    return this.products.find(product => product.id === id) ?? null;
  }
}
