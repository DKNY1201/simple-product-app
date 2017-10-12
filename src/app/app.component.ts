import {Component} from '@angular/core';

type conditionType = 'new' | 'used' | 'discontinued';

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    condition: conditionType;
    category: string;
}

const PRODUCTS: Product[] = [{
    id: 1,
    name: 'iPhone 6s',
    description: 'Good smart phone',
    price: 1000,
    condition: 'new',
    category: 'Phone'
},
    {
        id: 2,
        name: 'iPhone 7',
        description: 'Pretty smart phone',
        price: 1100,
        condition: 'used',
        category: 'Phone'
    },
    {
        id: 3,
        name: 'iPhone 7s',
        description: 'Large smart phone',
        price: 1300,
        condition: 'discontinued',
        category: 'Phone'
    },
    {
        id: 4,
        name: 'Macbook Pro early 2015',
        description: 'Wonderful laptop tool for developer',
        price: 1500,
        condition: 'new',
        category: 'Laptop'
    },
    {
        id: 5,
        name: 'eSaver',
        description: 'Unlimited power bank',
        price: 30,
        condition: 'new',
        category: 'Technology'
    },
    {
        id: 6,
        name: 'Mitsubishi',
        description: 'Good car',
        price: 10000,
        condition: 'used',
        category: 'Car'
    },
    {
        id: 7,
        name: 'Domehouse',
        description: 'Ancient house',
        price: 85000,
        condition: 'discontinued',
        category: 'House'
    },
    {
        id: 8,
        name: 'Mentos',
        description: 'Who says no to mentos?',
        price: 2,
        condition: 'new',
        category: 'Candy'
    },
    {
        id: 9,
        name: 'Red pen',
        description: 'Good pen',
        price: 1,
        condition: 'used',
        category: 'Pen'
    },
    {
        id: 10,
        name: 'Phone case',
        description: 'Suitable for your smart phone',
        price: 15,
        condition: 'new',
        category: 'Case'
    }];

@Component({
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <h2>My Products</h2>
        <ul class="products">
            <li *ngFor="let product of products" 
                (click)="onSelect(product)" 
                [class.selected]="product === selectedProduct">
                <span class="badge">{{product.id}}</span> {{product.name}}
            </li>
        </ul>
        <div *ngIf="selectedProduct">
            <h2>{{selectedProduct.name}} details!</h2>
            <div><label>id: </label>{{selectedProduct.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedProduct.name" placeholder="name"/>
            </div>
        </div>
    `,
    styles: [
            `
            .selected {
                background-color: #CFD8DC !important;
                color: white;
            }

            .products {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
            }

            .products li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
            }

            .products li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
            }

            .products li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
            }

            .products .text {
                position: relative;
                top: -3px;
            }

            .products .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
            }
        `
    ]
})
export class AppComponent {
    selectedProduct: Product;
    title = 'Simple product app';
    products = PRODUCTS;

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
}
