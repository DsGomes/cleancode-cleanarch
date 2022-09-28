import Order from "../src/v2/Order";
import {
    invalidCpf,
    validCpf,
    expiredVoucher,
    itens,
    validVoucher
} from "./__mocks__/OrderMocks";

describe('Order', () => {
    it('should not complete the order when cpf is invalid', () => {
        expect(() => { new Order(invalidCpf) }).toThrow('Invalid CPF');
    });

    it('should not complete the order when there is no item', () => {
        const order = new Order(validCpf);

        expect(() => { order.calculateTotal() }).toThrow('You need select at least one product!');
    });

    it('should complete the order when passed correct params without discount', () => {
        const order = new Order(validCpf);
        order.addItem(itens[0], 2);
        const orderTotal = order.calculateTotal();

        expect(orderTotal).toBe(20);
    });

    it('should complete the order when passed correct params with discount', () => {
        const order = new Order(validCpf);

        order.addItem(itens[1], 2);
        order.addItem(itens[2], 3);
        order.addVoucherDiscount(validVoucher);
        const orderTotal = order.calculateTotal();

        expect(orderTotal).toBe(57.6);
    });

    it('should complete the order with total price when expired discount', () => {
        const order = new Order(validCpf);

        order.addItem(itens[1], 2);
        order.addItem(itens[2], 3);
        order.addVoucherDiscount(expiredVoucher);
        const orderTotal = order.calculateTotal();

        expect(orderTotal).toBe(72);
    });

    it('should not complete the order when quantity item is negative', () => {
        const order = new Order(validCpf);
        expect(()=> {order.addItem(itens[1], -1)}).toThrow(new Error('Quantity item must be greater than zero'));        
    })

    it('should not complete the order when item was already added', () => {
        const order = new Order(validCpf);
        order.addItem(itens[1], 2);
        expect(()=> {order.addItem(itens[1], 1)}).toThrow(new Error('Item already added.')); 
    })
});