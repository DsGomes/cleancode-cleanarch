import Order from "../src/v2/Order";
import { ItemOrder } from "../src/v2/utils/types";

describe('Order', () => {
    it('should not complete the order when cpf is invalid', () => {
        const itemOrder: ItemOrder = {
            cpf: '1114447773',
            items: [{
                description: 'order item 1',
                price: 10,
                quantity: 2
            }],
            voucher: 20,
        }
        const order = new Order();

        expect(() => { order.sendOrder(itemOrder) }).toThrow('Invalid CPF');
    });

    it('should not complete the order when cpf is invalid', () => {
        const itemOrder: ItemOrder = {
            cpf: '111.444.777-35',
            items: [
                {
                description: 'order item 1',
                price: 10,
                quantity: 2
                },
                {
                    description: 'order item 1',
                    price: 10,
                    quantity: 2
                },
                {
                    description: 'order item 1',
                    price: 10,
                    quantity: 2
                }
            ],
            voucher: 20,
        }
        const order = new Order();
        const result = order.sendOrder(itemOrder);

        expect(result).toBe(true);
    });
});