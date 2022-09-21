export default class Voucher {
    constructor(readonly code: string, readonly percentage: number) {}

    calculateDiscount (total: number) {
        return (total * this.percentage) / 100;
    }
}