import {Cart} from "./cart";
import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Product} from "../product";

@Injectable()
export class CartService {
    private cartUrl = 'api/carts';
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http: Http) {}

    addToCart(cart: Cart): Promise<Cart> {
        return this.http.post(this.cartUrl, JSON.stringify(cart), {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Cart)
            .catch(error => this.handleError(error));
    }

    updateCart() {

    }

    getCarts(): Promise<Cart[]> {
        return this.http.get(this.cartUrl)
            .toPromise()
            .then(response => response.json() as Cart[])
            .catch(error => this.handleError(error));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred ', error);
        return Promise.reject(error.message || error);
    }
}