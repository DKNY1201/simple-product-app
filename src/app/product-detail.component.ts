import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {ActivatedRoute, ParamMap} from "@angular/router";

import {Product} from "./product";
import {ProductService} from "./product.service";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'detail-product',
    template: `
        <div *ngIf="product">
            <h2>{{product.name}} details!</h2>
            <div><label>id: </label>{{product.id}}</div>
            <div><label>description: </label>{{product.description}}</div>
            <div><label>price: </label>{{product.price | currency:'USD':true}}</div>
            <div>
                <label>condition: </label>
                <span ngSwitch="{{product.condition}}">
                    <span *ngSwitchCase="'new'">Brand New!</span>
                    <span *ngSwitchCase="'used'">Mint!</span>
                    <span *ngSwitchCase="'discontinued'">Out of Stock!</span>
                </span>
            </div>
            <div><label>category: </label>{{product.category}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="product.name" placeholder="name"/>
            </div>
            <button (click)="goBack()">Go back</button>
            <button (click)="save()">Save</button>
        </div>
    `,
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
    product: Product;
    constructor(private productService: ProductService, private route: ActivatedRoute, private location: Location) {}

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