import { MatCardModule } from '@angular/material/card';
import { ProductBoxComponent } from './product-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductBoxComponent],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [ProductBoxComponent],
})
export class ProductBoxModule {}
