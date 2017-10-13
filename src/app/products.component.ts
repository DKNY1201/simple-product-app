import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from "./product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
    ngOnInit(): void {
        this.getProductsSlowly();
    }

    constructor(private productService: ProductService, private router: Router) {}

    selectedProduct: Product;
    products: Product[];

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }

    getProducts(): void {
        this.productService.getProducts()
            .then((products) => this.products = products);
    }

    getProductsSlowly(): void {
        this.productService.getProductsSlowly()
            .then((products) => this.products = products);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedProduct.id]);
    }
}
