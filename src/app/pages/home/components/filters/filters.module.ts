import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [FiltersComponent],
  imports: [CommonModule, MatExpansionModule, MatListModule],
  exports: [FiltersComponent],
})
export class FiltersModule {}
