import Item from "../src/v2/Item";
import Order from "../src/v2/Order";

describe('Order', () => {
    const invalidCpf = '1114447773';
    const validCpf = '111.444.777-35';
    const itens = [
        new Item('order item 1', 10, 2),
        new Item('order item 2', 12, 4),
        new Item('order item 3', 16, 6),
    ];
    const voucher = 20;

    it('should not complete the order when cpf is invalid', () => {
        expect(() => { new Order(invalidCpf) }).toThrow('Invalid CPF');
    });

    it('should not complete the order when there is no item', () => {
        const order = new Order(validCpf);

        expect(() => { order.calculateTotal() }).toThrow('You need select at least one product!');
    });

    it('should complete the order when passed correct params without discount', () => {
        const order = new Order(validCpf);
        order.addItem(itens[0].description, itens[0].price, itens[0].quantity);
        const orderTotal = order.calculateTotal();

        expect(orderTotal).toBe(20);
    });

    it('should complete the order when passed correct params with discount', () => {
        const order = new Order(validCpf);
        order.addItem(itens[0].description, itens[0].price, itens[0].quantity);
        order.addItem(itens[1].description, itens[1].price, itens[1].quantity);
        order.addVoucherDiscount(voucher);
        const orderTotal = order.calculateTotal();

        expect(orderTotal).toBe(48);
    });
});