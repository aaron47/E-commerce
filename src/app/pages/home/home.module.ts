import { ProductBoxModule } from './components/product-box/product-box.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductsHeaderModule } from './components/products-header/products-header.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersModule } from './components/filters/filters.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ProductsHeaderModule,
    ProductBoxModule,
    MatSidenavModule,
    FiltersModule,
    MatGridListModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
