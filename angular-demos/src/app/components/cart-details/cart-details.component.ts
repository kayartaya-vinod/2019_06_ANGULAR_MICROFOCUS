import { Component, OnInit } from '@angular/core';
import { LineItem } from '@models/line-item';
import { CartService } from '@services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cart: LineItem[];

  constructor(private cs: CartService, private router: Router) { }

  ngOnInit() {
    this.cart = [...this.cs.cart]; // shallow copy; do not mutate model
  }

  decrementQuantity(item: LineItem) {
    item.quantity--;
    this.cs.addToCart(item.product, item.quantity);
    if (item.quantity === 0) {
      const index = this.cart.findIndex(itm => itm === item);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  }
  incrementQuantity(item: LineItem) {
    item.quantity++;
    this.cs.addToCart(item.product, item.quantity);
  }

  emptyCart(){
    if(window.confirm('Are you sure? This cannot be reversed!')) {
      this.cs.emptyCart();
      this.cart = [];
    }
  }

  proceedToCheckout(): void {
    // programatically navigate to a different URL
    this.router.navigate(['/checkout']);
  }

}
