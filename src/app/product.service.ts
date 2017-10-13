import {Injectable} from "@angular/core";
import {PRODUCTS} from "./mock-products";
import {Product} from "./product";

@Injectable()
export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }

    getProductsSlowly(): Promise<Product[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getProducts()), 300);
        })
    }

    getProduct(id: number): Promise<Product> {
        return this.getProducts()
            .then((products) => products.find(product => product.id === id));
    }
}