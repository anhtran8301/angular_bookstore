export class Product {
    constructor(
        public id: number,
        public sku: string,
        public name: string,
        public description: string,
        public unitPrice: number,
        public imagesString: string,
        public active: boolean,
        public unitsInStock: number,
        public releaseDate: Date,
        public lastUpdated: Date,
        public quantity: number,
        public discount: number
        ) {

    }
}
