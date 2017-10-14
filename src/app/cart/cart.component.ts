import {Component, Input, OnInit} from "@angular/core";

import {Product} from "../product";
import {CartService} from "./cart.service";
import {Cart} from "./cart";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
    selector: 'my-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    @Input('currentProduct') product: Product;
    carts: Cart[];

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.getCarts();
    }

    getCarts() {
        this.cartService.getCarts()
            .then(carts => {
                this.carts = carts;
                console.log(this.carts);
            })
            .catch(err => console.error(err));

    }

    addToCart() {
        const isInCart = this.carts.filter(cart => cart.id === this.product.id).length === 1 ? true : false;

        if (isInCart) {

        } else {
            const cart = new Cart(this.product.id, 1);
            this.cartService.addToCart(cart)
                .then(cart => this.carts.push(cart))
                .catch(err => console.error(err));
        }
    }
}