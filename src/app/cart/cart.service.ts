import {Cart} from "./cart";
import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CartService {
    private cartUrl = 'api/carts';
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http: Http) {}

    // addToCart(cart: Cart): Promise<Cart> {
    //     return this.http.post(this.cartUrl, JSON.stringify(cart), {headers: this.headers})
    //         .toPromise()
    //         .then(response => response.json() as Cart)
    //         .catch(error => this.handleError(error));
    // }

    addToCart(cart: Cart): Observable<Cart> {
        return this.http.post(this.cartUrl, JSON.stringify(cart), {headers: this.headers})
            .map(res => res.json() as Cart)
            .catch((err: any) => Observable.throw(err || 'Server error'));
    }

    // updateCart(cart: Cart): Promise<Cart> {
    //     const url = `${this.cartUrl}/${cart.id}`;
    //
    //     return this.http.put(url, JSON.stringify(cart), {headers: this.headers})
    //         .toPromise()
    //         .then(() => cart)
    //         .catch(error => this.handleError(error));
    // }

    updateCart(cart: Cart): Observable<Cart> {
        const url = `${this.cartUrl}/${cart.id}`;

        return this.http.put(url, JSON.stringify(cart), {headers: this.headers})
            .map(() => cart)
            .catch((err: any) => Observable.throw(err || 'Server error'));
    }

    // getCarts(): Promise<Cart[]> {
    //     return this.http.get(this.cartUrl)
    //         .toPromise()
    //         .then(response => response.json() as Cart[])
    //         .catch(error => this.handleError(error));
    // }

    getCarts(): Observable<Cart[]> {
        return this.http.get(this.cartUrl)
            .map(res => res.json() as Cart[])
            .catch((err: any) => Observable.throw(err || 'Server error'));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred ', error);
        return Promise.reject(error.message || error);
    }
}