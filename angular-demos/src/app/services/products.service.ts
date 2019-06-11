import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/products/';

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
    return this.http.get(baseUrl, options).map(resp => resp as Array<Product>);
  }
}
