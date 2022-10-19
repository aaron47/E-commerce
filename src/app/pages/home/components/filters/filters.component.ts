import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();

  categories$: Observable<string[]>;

  constructor(private readonly storeService: StoreService) {}

  ngOnInit(): void {
    this.categories$ = this.storeService.getAllCategories();
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
