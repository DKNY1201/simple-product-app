import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {ActivatedRoute, ParamMap} from "@angular/router";
import 'rxjs/add/operator/switchMap';

import {Product} from "./product";
import {ProductService} from "./product.service";
import {CartService} from "./cart/cart.service";

@Component({
    selector: 'detail-product',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
    product: Product;
    constructor(private productService: ProductService,
                private route: ActivatedRoute,
                private location: Location,
                private cartService: CartService) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.productService.getProduct(+params.get('id')))
            .subscribe((product) => this.product = product);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.productService.updateProduct(this.product)
            .then(() => this.goBack());
    }
}