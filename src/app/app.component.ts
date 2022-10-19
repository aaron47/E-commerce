import { CartService } from './services/cart-service.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from './utils/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
