import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {

  names: Array<string> = [];
  people: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.names.push('Vinod', 'Shyam', 'John', 'Jane');

    this.people.push({ name: 'Vinod', city: 'Bangalore', gender: 'Male', age: 45 });
    this.people.push({ name: 'Shyam', city: 'Shimoga', gender: 'Male', age: 46 });
    this.people.push({ name: 'John', city: 'Dallas', gender: 'Male', age: 12 });
    this.people.push({ name: 'Jane', city: 'Chicago', gender: 'Female', age: 20 });

    console.log(this.people)
  }

  deletePerson(n: number): void {
    this.people.splice(n, 1);
  }

}
