import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../../shared/models/pagination';
import { IProduct } from '../../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductItemService {
  baseUrl = 'http://localhost:10401/api/';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Pagination<IProduct[]>>(
      this.baseUrl + 'products?pageSize=6'
    );
  }
}
