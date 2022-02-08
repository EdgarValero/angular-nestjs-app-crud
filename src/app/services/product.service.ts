import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../interfaces/Product';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  BASE_URL: string = 'http://localhost:3000';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/api/products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/api/products`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.BASE_URL}/api/products?id=${id}`);
  }

  updateProduct(id: any, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/api/products/${id}`, product);
  }
}
