import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from "./product.service";
import {Router} from "@angular/router";

type conditionType = 'new' | 'used' | 'discontinued';

@Component({
    selector: 'my-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
    ngOnInit(): void {
        this.getProducts();
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

    createProduct(productName: string, productDesc: string, productPrice: number, productCond: conditionType, cat: string): void {
        if (!productName || !productDesc || !productPrice || isNaN(productPrice) || !productCond || !cat) {
            console.error('Data inputted are wrong!!!');
            return;
        }

        const id = this.products[this.products.length - 1].id + 1;

        const product = new Product(id, productName, productDesc, productPrice, productCond, cat);
        this.productService.createProduct(product)
            .then(product => this.products.push(product))
            .catch(error => console.error(error));
    }

    deleteProduct(product: Product) {
        this.productService.deleteProduct(product)
            .then(() => {
                this.products.splice(this.products.indexOf(product), 1);
                if (this.selectedProduct === product) {
                    this.selectedProduct = null;
                }
            })
            .catch(error => console.error(error));
    }
}
