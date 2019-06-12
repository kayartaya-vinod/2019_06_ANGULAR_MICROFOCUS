import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:3000/orders/';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  placeOrder(order: Order): Observable<Order> {
    return this.http.post(baseUrl, order)
      .map(resp => resp as Order);
  }
}
