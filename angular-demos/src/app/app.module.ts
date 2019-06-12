import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // angular version > 5
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClickCounterComponent } from './components/click-counter/click-counter.component';
import { DirectivesDemoComponent } from './components/directives-demo/directives-demo.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DiscountedPricePipe } from './pipes/discounted-price.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { routesConfig } from './routesConfig';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/nested-routes-demo/home/home.component';
import { JavaComponent } from './components/nested-routes-demo/java/java.component';
import { CoreJavaComponent } from './components/nested-routes-demo/java/core-java/core-java.component';
import { JavaeeComponent } from './components/nested-routes-demo/java/javaee/javaee.component';
import { SpringComponent } from './components/nested-routes-demo/java/spring/spring.component';
import { AngularComponent } from './components/nested-routes-demo/angular/angular.component';
import { AngularjsComponent } from './components/nested-routes-demo/angular/angularjs/angularjs.component';
import { Angular7Component } from './components/nested-routes-demo/angular/angular7/angular7.component';
import { NodeComponent } from './components/nested-routes-demo/node/node.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClickCounterComponent,
    DirectivesDemoComponent,
    ProductCardComponent,
    ProductListComponent,
    DiscountedPricePipe,
    SidebarComponent,
    CartDetailsComponent,
    CheckoutComponent,
    HomeComponent,
    JavaComponent,
    CoreJavaComponent,
    JavaeeComponent,
    SpringComponent,
    AngularComponent,
    AngularjsComponent,
    Angular7Component,
    NodeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    RouterModule.forRoot(routesConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
