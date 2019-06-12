import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private ps: ProductsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // get the route parameters
    // this.activatedRoute.params() --> asynchronous via obserable
    // this.activatedRoute.snapshot.params() --> syncrhonous
    const params = this.activatedRoute.snapshot.params;
    console.log('params is', params);

    if (params['by_what']) {
      // by_what may be 'brand' or 'category'
      const { by_what, by_val } = params;
      this.products = this.ps.getProductsBy(by_what, by_val);
    }
    else {
      this.products = this.ps.getProducts();
    }

  }
}
