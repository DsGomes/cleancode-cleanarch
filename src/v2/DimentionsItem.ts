export default class DimentionsItem {
    constructor(
        readonly height: number,
        readonly width: number,
        readonly depth: number,
        readonly weight: number
    ) {
        if(!this.validateDimentions()) throw new Error('Dimensions must be greater than zero');
    }

    validateDimentions(): boolean {
        if (this.height < 0 ||
            this.width < 0 ||
            this.depth < 0 ||
            this.weight < 0) return false;

        return true;
    }
}