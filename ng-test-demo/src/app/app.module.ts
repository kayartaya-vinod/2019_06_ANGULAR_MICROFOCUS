import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { Ng1ProductListComponent } from './components/ng1-product-list/ng1-product-list.component';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    Ng1ProductListComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
