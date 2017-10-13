import {Injectable} from "@angular/core";
import {PRODUCTS} from "./mock-products";
import {Product} from "./product";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise'

@Injectable()
export class ProductService {
    private productUrl = 'api/products';

    constructor(private http: Http){}

    getProducts(): Promise<Product[]> {
        return this.http.get(this.productUrl)
            .toPromise()
            .then(response => response.json() as Product[])
            .catch(error => this.handleError(error));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred ', error);
        return Promise.reject(error.message || error);
    }

    getProductsSlowly(): Promise<Product[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getProducts()), 300);
        })
    }

    getProduct(id: number): Promise<Product> {
        return this.http.get(`${this.productUrl}/${id}`)
            .toPromise()
            .then(response => response.json() as Product)
            .catch(error => this.handleError(error));
    }
}