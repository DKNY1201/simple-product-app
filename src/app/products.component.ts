import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from "./product.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Utils} from "./shared/Utils";

@Component({
    selector: 'my-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    addProductForm: FormGroup;

    ngOnInit(): void {
        this.getProducts();
        this.initAddProductForm();
    }

    constructor(private productService: ProductService, private router: Router) {
    }

    selectedProduct: Product;
    products: Product[];

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }

    getProducts(): void {
        this.productService.getProducts().subscribe(
            products => this.products = products,
            error => console.error(error),
            () => console.log('complete get product')
        )
    }

    getProductsSlowly(): void {
        this.productService.getProductsSlowly()
            .then((products) => this.products = products);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedProduct.id]);
    }

    // createProduct(productName: string, productDesc: string, productPrice: number, productCond: conditionType, cat: string): void {
    //     if (!productName || !productDesc || !productPrice || isNaN(productPrice) || !productCond || !cat) {
    //         console.error('Data inputted are wrong!!!');
    //         return;
    //     }
    //
    //     const id = this.products[this.products.length - 1].id + 1;
    //
    //     const product = new Product(id, productName, productDesc, productPrice, productCond, cat);
    //     this.productService.createProduct(product)
    //         .then(product => this.products.push(product))
    //         .catch(error => console.error(error));
    // }

    createProduct(product: Product): void {
        this.productService.createProduct(product)
            .subscribe(
                product => this.products.push(product),
                error => console.error(error),
                () => console.log('complete create product')
            );
    }

    // deleteProduct(product: Product) {
    //     this.productService.deleteProduct(product)
    //         .then(() => {
    //             this.products.splice(this.products.indexOf(product), 1);
    //             if (this.selectedProduct === product) {
    //                 this.selectedProduct = null;
    //             }
    //         })
    //         .catch(error => console.error(error));
    // }

    deleteProduct(product: Product) {
        this.productService.deleteProduct(product)
            .subscribe(
                () => {
                    this.products.splice(this.products.indexOf(product), 1);
                    if (this.selectedProduct === product) {
                        this.selectedProduct = null;
                    }
                },
                error => console.error(error),
                () => console.log('complete delete product')
            );
    }

    initAddProductForm() {
        this.addProductForm = new FormGroup({
            'productName': new FormControl(null, [Validators.required], Utils.validateUniqueProductIDPromise),
            'productDesc': new FormControl(null, Validators.required),
            'productPrice': new FormControl(null, [Validators.required, Utils.validatePrice]),
            'productCond': new FormControl('used', Validators.required),
            'productCat': new FormControl(null, Validators.required)
        })
    }

    onSubmit() {
        const productName = this.addProductForm.get('productName').value;
        const productDesc = this.addProductForm.get('productDesc').value;
        const productPrice = this.addProductForm.get('productPrice').value;
        const productCond = this.addProductForm.get('productCond').value;
        const productCat = this.addProductForm.get('productCat').value;

        const id = this.products[this.products.length - 1].id + 1;

        const product = new Product(id, productName, productDesc, productPrice, productCond, productCat);

        this.createProduct(product);
    }
}
