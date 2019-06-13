import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number = 1;

  constructor() { }

  ngOnInit() {
  }

  incrementCount() {
    this.count++;
  }
  decrementCount() {
    this.count--;
  }

}
