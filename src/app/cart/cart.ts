import {Product} from "../product";
export class Cart{
    id: number;
    amount: number;
    product: Product;

    constructor(id: number, amount: number, product: Product) {
        this.id = id;
        this.amount = amount;
        this.product = product;
    }
}