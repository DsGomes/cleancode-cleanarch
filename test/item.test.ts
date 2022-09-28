import Item from "../src/v2/Item"
import { dimensions, itens } from "./__mocks__/OrderMocks"

describe('Item', () => {
    it('should not add item when dimensions has negative parameters', () => {
        const item = new Item(itens[0].id, itens[0].description, itens[0].price);
        expect(()=> { 
            item.addDimentions(
                dimensions[1].height,
                dimensions[1].weight,
                dimensions[1].width,
                dimensions[1].depth
            )
        }).toThrow(new Error('Dimensions must be greater than zero'));
    });
});