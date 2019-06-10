import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

console.log('from ex01.ts');


@Component({
    selector: 'app-root',
    template: `
    <app-header></app-header>
    <p>The message is {{ message }}</p>
    `
})
class HelloWorldComponent {
    message: string;

    constructor() {
        this.message = 'Hello, world!';
    }
}

@Component({
    selector: 'app-header',
    template: `
    <h1>This is an angular application</h1>
    <hr />
    `
})
class HeaderComponent {
}


/// -------------- a new NgModule, which contains the above component

@NgModule({
    declarations: [
        // All components, directives, pipes that belong to this module are listed here
        HelloWorldComponent,
        HeaderComponent
    ],
    providers: [
        // All injectables (services) are listed here
    ],
    imports: [
        // Other NgModules that this module depends on are listed here
        BrowserModule, // this is required for DOM manipulation only
    ],
    exports: [
        // List of components/directives/pipes that are exported from here
        // so that other modules can make use of them are listed here
    ],
    bootstrap: [
        // List of all components that needs to be injected into index.html (bootstraped),
        // are listed here. Generally only one component is bootstraped.
        HelloWorldComponent,
    ],
})
class AppModule { }

/// now that we have created a NgModule, we have to bootstrap this module, by 
/// giving the same to Angular runtime (part of vendor.js).

platformBrowserDynamic().bootstrapModule(AppModule);