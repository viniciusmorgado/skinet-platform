import { Injectable } from '@angular/core';
import { IType } from '../shared/models/type';
import { IBrand } from '../shared/models/brand';
import { HttpClient } from '@angular/common/http';

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
}
