import { v4 as uuid } from 'uuid';

export default class Item {
    readonly id: string;

    constructor(readonly description: string, readonly price: number, readonly quantity: number) {
        this.id = uuid();
    }
}