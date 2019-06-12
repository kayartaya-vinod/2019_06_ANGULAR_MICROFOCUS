import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories: Observable<string[]>;
  brands: Observable<string[]>;

  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.categories = this.ps.getAllCategories();
    this.brands = this.ps.getAllBrands();
  }

}
