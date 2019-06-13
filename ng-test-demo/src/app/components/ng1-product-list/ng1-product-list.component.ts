import { Component, OnInit } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'app-ng1-product-list',
  templateUrl: './ng1-product-list.component.html',
  styleUrls: ['./ng1-product-list.component.css']
})
export class Ng1ProductListComponent implements OnInit {

  constructor(private upgrade: UpgradeModule) { }

  ngOnInit(): void {
    this.upgrade.bootstrap(document.querySelector('#ng1app'), ['myapp']);
  }
}
