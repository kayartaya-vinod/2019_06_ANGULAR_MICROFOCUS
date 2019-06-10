import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent implements OnInit {

  count: number;

  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

}
