import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  message: string = '';

  // this is the parent component for:
  // 1. Angular7Component
  // 2. AngularjsComponent

  constructor() { }

  ngOnInit() {
  }

  nameAddedToNameList(name) {
    this.message = name + ' added to the list';
  }

  nameRemovedFromNameList(name) {
    this.message = name + ' was removed from the list';
  }

}
