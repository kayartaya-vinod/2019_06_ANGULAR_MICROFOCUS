import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(pageNum: number = 1, pageSize: number = 9): Observable<Product[]> {
    const options = {
      params: {
        _page: pageNum.toString(),
        _limit: pageSize.toString()
      }
    }
    return this.http.get(baseUrl + 'products', options).map(resp => resp as Array<Product>);
  }

  getAllBrands(): Observable<string[]> {
    return this.http.get(baseUrl + 'brands')
      .map(resp => resp as string[]);
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get(baseUrl + 'categories')
      .map(resp => resp as string[]);
  }

  getProductsBy(by_what: string, by_val: string, pageNum = 1, pageSize = 9): Observable<Product[]> {
    // http://localhost:3000/products/?category=fruit
    const options = {
      params: {
        [by_what]: by_val,
        _page: pageNum+'',
        _limit: pageSize+''
      }
    };
    return this.http.get(baseUrl + 'products', options)
      .map(resp => resp as Product[]);
  }
}
