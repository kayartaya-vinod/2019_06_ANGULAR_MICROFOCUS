import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routesConfig: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/by/:by_what/:by_val',
        component: ProductListComponent
    },
    {
        path: 'cart-details',
        component: CartDetailsComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    }
];