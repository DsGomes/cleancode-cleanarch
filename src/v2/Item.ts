import DimentionsItem from "./DimentionsItem";

export default class Item {
    private dimensions: DimentionsItem;

    constructor(readonly id: number, readonly description: string, readonly price: number) {}

    addDimentions(height: number, weight: number, width: number, depth: number): void {
        this.dimensions = new DimentionsItem(height, width, depth, weight);
    }
}