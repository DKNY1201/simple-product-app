import {Injectable} from "@angular/core";
import {Product} from "./product";
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise'
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductService {
    private productUrl = 'api/products';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){}

    getProducts(): Observable<Product[]> {
        // return this.http.get(this.productUrl)
        //     .toPromise()
        //     .then(response => response.json() as Product[])
        //     .catch(error => this.handleError(error));
        return this.http.get(this.productUrl)
            .map(response => response.json() as Product[])
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getProductsSlowly(): Promise<Product[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getProducts()), 300);
        })
    }

    // getProduct(id: number): Promise<Product> {
    //     return this.http.get(`${this.productUrl}/${id}`)
    //         .toPromise()
    //         .then(response => response.json() as Product)
    //         .catch(error => this.handleError(error));
    // }

    getProduct(id: number): Observable<Product> {
        return this.http.get(`${this.productUrl}/${id}`)
            .map(res => res.json() as Product)
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    // updateProduct(product: Product): Promise<Product> {
    //     const url = `${this.productUrl}/${product.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(product), {headers: this.headers})
    //         .toPromise()
    //         .then(() => product)
    //         .catch(error => this.handleError(error));
    // }

    updateProduct(product: Product): Observable<Product> {
        const url = `${this.productUrl}/${product.id}`;
        return this.http
            .put(url, JSON.stringify(product), {headers: this.headers})
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    // createProduct(product: Product): Promise<Product> {
    //     return this.http
    //         .post(this.productUrl, JSON.stringify(product), this.headers)
    //         .toPromise()
    //         .then(response => response.json() as Product)
    //         .catch(error => this.handleError(error));
    // }

    createProduct(product: Product): Observable<Product> {
        return this.http
            .post(this.productUrl, JSON.stringify(product), this.headers)
            .map(response => response.json() as Product)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    // deleteProduct(product: Product) {
    //     const url = `${this.productUrl}/${product.id}`;
    //     return this.http.delete(url)
    //         .toPromise()
    //         .then(response => console.log(response))
    //         .catch(error => this.handleError(error));
    // }

    deleteProduct(product: Product) {
        const url = `${this.productUrl}/${product.id}`;
        return this.http.delete(url)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred ', error);
        return Promise.reject(error.message || error);
    }
}