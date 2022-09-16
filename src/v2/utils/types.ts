export type Item = {
    description: string,
    price: number,
    quantity: number
};

export type ItemOrder = {
    cpf: string,
    items: Array<Item>,
    voucher: number,
}