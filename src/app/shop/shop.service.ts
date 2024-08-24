import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/type';
import { IBrand } from '../shared/models/brand';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'http://localhost:10401/api/';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Pagination<IProduct[]>>(
      this.baseUrl + 'products?pageSize=50'
    );
  }

  getTypes() {
    return this.http.get<IType[]>(
      this.baseUrl + 'products/types'
    );
  }

  getBrands() {
    return this.http.get<IBrand[]>(
      this.baseUrl + 'products/brands'
    );
  }
}
