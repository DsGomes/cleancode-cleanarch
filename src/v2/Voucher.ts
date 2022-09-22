export default class Voucher {
    constructor(readonly code: string, readonly percentage: number, readonly expirationDate: Date) {}

    calculateDiscount (total: number) {
        const today = new Date();
        today.setHours(0,0,0,0);
        if (this.expirationDate >= today){
            return (total * this.percentage) / 100;
        }
        return 0;
    }
}