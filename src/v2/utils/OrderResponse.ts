import Cpf from "../Cpf"
import Item from "../Item"

export type OrderResponse = {
    order: {
        id: string,
        cpf: Cpf,
        items: Item[],
        total: number
    }
}