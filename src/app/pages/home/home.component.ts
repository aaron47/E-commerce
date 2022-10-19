import { CartService } from '../../services/cart-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, ROWS_HEIGHT } from 'src/app/utils/types';
import { StoreService } from 'src/app/services/store.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  columnsNum: number = 3;
  category: string | undefined;
  rowHeight: number = ROWS_HEIGHT[this.columnsNum];

  products: Product[] | undefined;
  categories: string[] | undefined;
  sort = 'desc';
  count = '12';
  // productsSubscription: Subscription | undefined;
  // categoriesSubscription: Subscription | undefined;
  products$: Observable<Product[]>;
  categories$: Observable<string[]>;

  constructor(
    private readonly cartService: CartService,
    private readonly storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  // ngOnDestroy(): void {
  //   this.productsSubscription?.unsubscribe();
  //   this.categoriesSubscription?.unsubscribe();
  // }

  getProducts(category?: string): void {
    this.products$ = this.storeService.getAllProducts(
      this.count,
      this.sort,
      category
    );
  }

  getCategories(): void {
    this.categories$ = this.storeService.getAllCategories();
  }

  onColumnsCountChange(cols: number): void {
    this.columnsNum = cols;
    this.rowHeight = ROWS_HEIGHT[cols];
  }

  onCategoryChange(category: string): void {
    this.category = category;
    this.getProducts(category);
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  onItemsCountChange(newCount: number) {
    this.count = newCount.toString();
    this.getProducts();
  }

  onSortChange(newSort: string) {
    this.sort = newSort;
    this.getProducts();
  }
}
