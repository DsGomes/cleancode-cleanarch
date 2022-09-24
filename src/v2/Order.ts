import { v4 as uuid } from 'uuid';
import Cpf from './Cpf';
import Item from "./Item";
import OrderItem from './OrderItem';
import Voucher from './Voucher';

export default class Order {
    readonly id: string;
    private orderItems: OrderItem[];
    private voucher?: Voucher;
    private cpf: Cpf;

    constructor(cpf: string){
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
        this.id = uuid()
    }

    calculateTotal(): number{
        let totalPrice = 0;
        if(!this.orderItems.length) throw new Error('You need select at least one product!');
        this.orderItems.forEach(item => totalPrice += item.getTotal());

        if(this.voucher) totalPrice -= this.voucher.calculateDiscount(totalPrice);
        return totalPrice;
    }

    addItem(item: Item, quantity: number): void{
        if(quantity <= 0) throw new Error('Quantity item must be greater than zero');
        this.orderItems.forEach(orderItem => {
            if(orderItem.itemId === item.id) throw new Error('Item already added.');
        })
        this.orderItems.push(new OrderItem(item.id, item.price, quantity));
    }

    addVoucherDiscount(voucherDiscount: Voucher): void {
        this.voucher = voucherDiscount;
    }
}