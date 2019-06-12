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
    CartDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    RouterModule.forRoot(routesConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
