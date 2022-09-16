import Item from "../Item"

export type OrderResponse = {
    order: {
        id: string,
        cpf: string,
        items: Item[],
        total: number
    }
}