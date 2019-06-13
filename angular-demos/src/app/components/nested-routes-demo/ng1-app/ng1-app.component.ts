import { Component, OnInit } from '@angular/core';
import {  UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'app-ng1-app',
  templateUrl: './ng1-app.component.html',
  styleUrls: ['./ng1-app.component.css']
})
export class Ng1AppComponent implements OnInit {

  constructor(private upgrade: UpgradeModule) { }

  ngOnInit() {
    this.upgrade.bootstrap(document.getElementById('ng1app'), ['myapp']);
  }

}
