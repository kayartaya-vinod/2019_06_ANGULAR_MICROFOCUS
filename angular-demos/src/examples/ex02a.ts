import { NgModule, Component } from '@angular/core';

@Component({
    selector: 'app-greet',
    template: `
    <h1>Hello, from Angular!</h1>
    <hr />
    `
})
class GreetingComponent {
}

@NgModule({
    declarations: [GreetingComponent],
    exports: [GreetingComponent]
})
export class MyModule { }