import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { Pagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: IProduct[] = [];

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.http.get<Pagination<IProduct[]>>('http://localhost:10401/api/products?pageSize=13').subscribe({
      next: response => this.products = response.data,
      error: error => console.log(error),
      complete: () => {
        console.log('request completed')
        console.log('extra statement')
      }
    })
  }
}
