import {Component, Input, OnInit} from "@angular/core";

import {Product} from "../product";
import {CartService} from "./cart.service";
import {Cart} from "./cart";

@Component({
    selector: 'my-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    @Input('currentProduct') product: Product;
    carts: Cart[] = [];
    showCartDetail = true;

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.getCarts();
    }

    getCarts() {
        this.cartService.getCarts()
            .subscribe(
                carts => this.carts = carts,
                error => console.error(error),
                () => console.log('complete get cart')
            );
    }

    addToCart() {
        const cartToUpdate = this.carts.filter(cart => cart.id === this.product.id);

        if (cartToUpdate.length === 1) {
            cartToUpdate[0].amount += 1;
            this.cartService.updateCart(cartToUpdate[0])
                .subscribe(
                    cart => console.log(cart),
                    error => console.error(error),
                    () => console.log('complete update cart')
                );
        } else {
            const cart = new Cart(this.product.id, 1, this.product);
            this.cartService.addToCart(cart)
                .subscribe(
                    cart => this.carts.push(cart),
                    error => console.error(error),
                    () => console.log('complete add to cart')
                );
        }
    }

    calcTotalItem(): number {
        let numOfItems = 0;
        if (this.carts.length > 0) {
            for (let cart of this.carts) {
                numOfItems += cart.amount;
            }
        }

        return numOfItems;
    }
}