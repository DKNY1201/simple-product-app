import {Component} from "@angular/core";

import {ProductSearchService} from "./product-search.service";

@Component({
    selector: 'product-search',
    templateUrl: './product-search.component.html',
    styleUrls: ['./product-search.component.css'],
    providers: [ProductSearchService]
})
export class ProductSearchComponent {

}