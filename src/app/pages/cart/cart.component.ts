import { CartService } from '../../services/cart-service.service';
import { Component, OnInit } from '@angular/core';
import { Cart, CartItem, Product } from 'src/app/utils/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        id: 1,
        product: 'https://via.placeholder.com/150',
        name: 'Sneakers',
        price: 200,
        quantity: 10,
      },
      {
        id: 2,
        product: 'https://via.placeholder.com/150',
        name: 'T-Shirt',
        price: 75,
        quantity: 20,
      },
      {
        id: 3,
        product: 'https://via.placeholder.com/150',
        name: 'Pants',
        price: 50,
        quantity: 5,
      },
    ],
  };

  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  addedProduct: Product;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  onRemoveItemFromCart(item: CartItem): void {
    this.cartService.removeItemFromCart(item);
  }

  onIncrementQuantity(item: CartItem) {
    this.cartService.addToCart(item);
  }

  onDecrementQuantity(item: CartItem) {
    this.cartService.decrementQuantity(item);
  }
  // clearCart(): void {
  //   this.cart.items = [];
  // }

  // decrementQuantity(item: CartItem) {
  //   const index = this.cart.items.indexOf(item);
  //   this.cart.items[index].quantity--;
  // }

  // incrementQuantity(item: CartItem) {
  //   const index = this.cart.items.indexOf(item);
  //   this.cart.items[index].quantity++;
  // }
}
