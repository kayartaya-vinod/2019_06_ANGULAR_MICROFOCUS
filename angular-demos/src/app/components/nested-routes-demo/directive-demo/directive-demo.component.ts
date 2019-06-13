import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {
  boxHeight = 200;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.boxHeight += 10;
  }

  decrement() {
    this.boxHeight -= 10;
  }

}
