import { Component } from '@angular/core';
import { IProduct } from '../../shared/models/product';
import { ProductItemService } from './product-item.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  products: IProduct[] = [];

  constructor(private productItemService: ProductItemService) {}

  ngOnInit(): void {
    this.productItemService.getProducts().subscribe({
        next: (response) => (this.products = response.data),
        error: (error) => console.log(error),
      });
  }
}
