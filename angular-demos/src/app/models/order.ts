import { Customer } from './customer';
import { LineItem } from './line-item';

export class Order {
    id: number;
    order_date: Date;
    customer: Customer;
    order_details: Array<LineItem>;
}
