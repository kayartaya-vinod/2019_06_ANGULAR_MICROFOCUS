import { Component, OnInit } from '@angular/core';
import { CartService } from '@services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemCount: number = 0;
  cartValue: number = 0;

  constructor(private cs: CartService) { }

  ngOnInit() {
    this.itemCount = this.cs.itemCount;
    this.cartValue = this.cs.cartValue;

    this.cs.onCartUpdated(() => {
      this.itemCount = this.cs.itemCount;
      this.cartValue = this.cs.cartValue;
    });
  }

}
