import { Injectable } from '@angular/core';
import { IType } from '../shared/models/type';
import { IBrand } from '../shared/models/brand';
import { HttpClient } from '@angular/common/http';
import { Pagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'http://localhost:10401/api/';

  constructor(private http: HttpClient) {}

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getProducts() {
    return this.http.get<Pagination<IProduct[]>>(
      this.baseUrl + 'products?pageSize=6'
    );
  }
}
