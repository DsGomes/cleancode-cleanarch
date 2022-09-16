import { v4 as uuid } from 'uuid';
import { validateCpf } from "./cpfValidator";
import Item from "./Item";
import { OrderResponse } from './utils/OrderResponse';

export default class Order {
    readonly id: string;
    private items: Item[];
    private voucher: number = 0;
    readonly cpf: string;

    constructor(cpf: string){
        if(!validateCpf(cpf)) throw new Error('Invalid CPF');
        this.cpf = cpf;
        this.items = [];
        this.id = uuid()
    }

    private calculateTotal(): number{
        let totalPrice = 0;
        if(!this.items.length) throw new Error('You need select at least one product!');
        this.items.forEach(item => totalPrice += (item.price * item.quantity));
        return totalPrice - (totalPrice * this.voucher);
    }
    
    addItem(description: string, price: number, quantity: number): void{
        this.items.push(new Item(description, price, quantity));
    }

    addVoucherDiscount(voucherDiscount: number): void {
        if (voucherDiscount <= 0) throw new Error('Invalid discount');
        
        this.voucher = voucherDiscount / 100;
    }

    sendOrder(): OrderResponse {
        const totalResult = this.calculateTotal();
        return {
            order: {
                id: this.id,
                cpf: this.cpf,
                items: this.items,
                total: totalResult
            }
        }
    }
}