import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';
import { IType } from '../shared/models/type';
import { IBrand } from '../shared/models/brand';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  types: IType[] = [];
  brands: IBrand[] = [];
  products: IProduct[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.getTypes().subscribe({
      next: (response) => (this.types = response),
      error: (error) => console.log(error),
    });

    this.shopService.getBrands().subscribe({
      next: (response) => (this.brands = response),
      error: (error) => console.log(error),
    });

    this. shopService.getProducts().subscribe({
      next: (response) => (this.products = response.data),
      error: (error) => console.log(error),
    });
  }
}
