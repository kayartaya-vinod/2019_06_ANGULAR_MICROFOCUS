import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '@components/nested-routes-demo/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { JavaComponent } from '@components/nested-routes-demo/java/java.component';
import { AngularComponent } from '@components/nested-routes-demo/angular/angular.component';
import { NodeComponent } from '@components/nested-routes-demo/node/node.component';
import { Angular7Component } from '@components/nested-routes-demo/angular/angular7/angular7.component';
import { AngularjsComponent } from '@components/nested-routes-demo/angular/angularjs/angularjs.component';
import { BoxDirective } from '@directives/box.directive';
import { DirectiveDemoComponent } from './components/nested-routes-demo/directive-demo/directive-demo.component';
import { FormsModule } from '@angular/forms';

const routesConfig: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'java'
    },
    {
        path: 'java',
        component: JavaComponent
    },
    {
        path: 'angular',
        component: AngularComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'angular7'
            },
            {
                path: 'angular7',
                component: Angular7Component
            },
            {
                path: 'angularjs',
                component: AngularjsComponent
            }
        ]
    },
    {
        path: 'nodejs',
        component: NodeComponent
    },
    {
        path: 'directives-demo',
        component: DirectiveDemoComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent,
        JavaComponent,
        AngularComponent,
        NodeComponent,
        Angular7Component,
        AngularjsComponent,
        BoxDirective,
        DirectiveDemoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routesConfig, { useHash: true })
    ],
    bootstrap: [
        HomeComponent
    ]
})
export class NestedRoutesAppModule { }