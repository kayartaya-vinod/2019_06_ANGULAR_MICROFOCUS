import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@models/product';
import { CartService } from '@services/cart.service';

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

  quantity: number = 1;
  inCart: boolean = false;

  constructor(private cs: CartService) { }

  ngOnInit() {
    if(this.cs.isProductInCart(this.product.id)) {
      this.inCart = true;
      this.quantity = this.cs.getQuantityForProduct(this.product.id);
    }
  }

  addToCart() {
    this.inCart = true;
    this.cs.addToCart(this.product, this.quantity);
  }
  incrementQuantity() {
    this.quantity++;
    this.cs.addToCart(this.product, this.quantity);
  }
  decrementQuantity() {
    this.quantity--;
    this.cs.addToCart(this.product, this.quantity);
    if (this.quantity === 0) {
      this.inCart = false;
      this.quantity = 1;
    }
  }
}
