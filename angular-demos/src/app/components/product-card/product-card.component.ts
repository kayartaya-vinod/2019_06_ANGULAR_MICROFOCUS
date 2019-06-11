import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  // this is to say that this component receives data from parent component's html
  // for example: <app-product-card [product]="p"></app-product-card> 
  // in product-list.component.html
  @Input()
  product: Product;

  constructor() { }

  ngOnInit() { }
}
