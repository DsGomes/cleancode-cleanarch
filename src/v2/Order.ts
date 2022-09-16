import { validateCpf } from "./cpfValidator";
import { ItemOrder } from "./utils/types";

export default class Order {
    constructor(){}

    sendOrder(itemOrder: ItemOrder): boolean {
        if(!validateCpf(itemOrder.cpf)) throw Error('Invalid CPF');

        return true;
    }
}