import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/models/line-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cart: LineItem[];

  constructor(private cs: CartService) { }

  ngOnInit() {
    this.cart = [...this.cs.cart];
  }

  decrementQuantity(item: LineItem) {
    item.quantity--;
    this.cs.addToCart(item.product, item.quantity);
  }
  incrementQuantity(item: LineItem) {
    item.quantity++;
    this.cs.addToCart(item.product, item.quantity);
  }

}
