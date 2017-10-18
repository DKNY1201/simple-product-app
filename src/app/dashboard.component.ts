import {Component, OnInit} from "@angular/core";
import {ProductService} from "./product.service";
import {Product} from "./product";

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements OnInit {
    ngOnInit(): void {
        this.getProducts();
    }

    products: Product[];

    constructor(private productService: ProductService) {
    }

    getProducts() {
        // this.productService.getProducts()
        //     .then((products) => this.products = products.slice(0, 5));
        this.productService.getProducts()
            .subscribe(
                products => this.products = products.slice(0, 5),
                (error) => console.error(error),
                () => console.log('complete get products on dashboard page')
            )
    }
}