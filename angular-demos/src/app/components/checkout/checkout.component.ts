import { Component, OnInit } from '@angular/core';
import { Customer } from '@models/customer';
import { Order } from '@models/order';
import { CartService } from '@services/cart.service';
import { OrdersService } from '@services/orders.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  customer: Customer;

  constructor(private cs: CartService, private os: OrdersService) { }

  ngOnInit() {
    this.customer = new Customer();
  }

  checkout() {
    const order = new Order();
    order.customer = { ...this.customer }; // shallow copy; don't mutate customer.
    order.order_date = new Date();
    order.order_details = [...this.cs.cart];

    this.os.placeOrder(order)
      .subscribe(() => {
        window.alert('Order placed successfully!');
        // TODO: empty the cart
        // TODO: navigate to the order-summary page
      }, (err) => { }, () => { });

  }

}
