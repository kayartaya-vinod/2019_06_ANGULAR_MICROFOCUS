import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@services/products.service';
import { Product } from '@models/product';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';
window['$'] = $;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  pageNum: number = 1;

  constructor(private ps: ProductsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const w = $(window);
    const d = $(document);
    const self = this;
    // register an event handler for the window's scroll event
    window.onscroll = function () {
      const windowHeight = w.height();
      const windowTopPosition = w.scrollTop();
      const documentHeight = d.height();
      if ((windowHeight + windowTopPosition) >= (documentHeight - 50)) {
        self.loadData();
      }
    }
    this.loadData();
  }

  loadData() {
    this.activatedRoute.params.subscribe(({ by_what, by_val }) => {
      if (by_what) {
        this.ps.getProductsBy(by_what, by_val)
          .subscribe(data => this.products = data);
      }
      else {
        this.ps.getProducts(this.pageNum++)
          .subscribe(data => this.products.push(...data));
      }
    });
  }
}
