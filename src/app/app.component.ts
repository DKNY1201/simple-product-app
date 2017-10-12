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

@Component({
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <h2>{{product.name}} details!</h2>
        <div><label>id: </label>{{product.id}}</div>
        <div><label>name: </label>{{product.name}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="product.name" type="text">
        </div>
    `,
    styles: []
})
export class AppComponent {
    title = 'Simple product app';
    product: Product = {
        id: 1,
        name: 'iPhone 6s',
        description: 'Good smart phone',
        price: 1000,
        condition: 'new',
        category: 'Phone'
}
;


}
