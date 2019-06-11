import { NgModule, Component } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyModule } from './ex02a';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

@Component({
    selector: 'app-root',
    template: `
    <app-greet></app-greet>
    <p>This is a demo for importing components from another module</p>
    <ngx-twitter-timeline 
    [data]="{sourceType: 'url', url: 'https://twitter.com/twitterdev'}"
    [opts]="{tweetLimit: 5}"></ngx-twitter-timeline>
    `
})
class MainComponent {
}


@NgModule({
    declarations: [MainComponent],
    imports: [BrowserModule, MyModule, NgxTwitterTimelineModule],
    bootstrap: [MainComponent]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);