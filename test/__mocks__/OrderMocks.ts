import Item from "../../src/v2/Item";
import Voucher from "../../src/v2/Voucher";

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

today.setHours(0,0,0,0);
yesterday.setHours(0,0,0,0);

export const invalidCpf = '1114447773';
export const validCpf = '111.444.777-35';
export const dimensions = [
    { height: 10, width: 12, weight: 13, depth: 20 },
    { height: 10, width: -1, weight: 10, depth: 12 },
]
export const itens = [
    new Item(1, 'order item 1', 10),
    new Item(2, 'order item 2', 12),
    new Item(3, 'order item 3', 16),
    new Item(4, 'invalid dimensions', 2)
];
export const expiredVoucher = new Voucher('OFF10', 10, yesterday);
export const validVoucher = new Voucher('OFF20', 20, today);