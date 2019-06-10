import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  product: Product;

  constructor() { }

  ngOnInit() {
    this.product = {
      "id": 16,
      "category": "vegitable",
      "name": "Cabbage",
      "brand": "Malnad",
      "description": "Cabbage small - Grade A",
      "quantity_per_unit": "1 Pc, approx. 700 to 800 GM",
      "unit_price": 20,
      "picture": "http://kvinod.com/images/products/10000066_21-fresho-cabbage-small-grade-a.jpg",
      "discount": 18
    };
  }

}
