import {Component, OnInit} from "@angular/core";

import {ProductSearchService} from "./product-search.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Product} from "./product";
import {Subject} from "rxjs/Subject";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'product-search',
    templateUrl: './product-search.component.html',
    styleUrls: ['./product-search.component.css'],
    providers: [ProductSearchService]
})
export class ProductSearchComponent implements OnInit {
    products: Observable<Product[]>;
    private searchTerms = new Subject<string>();

    constructor(private productSearchService: ProductSearchService, private router: Router) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        // this.searchTerms
        //     .debounceTime(300)
        //     .distinctUntilChanged()
        //     .subscribe((term) => {
        //     this.products = this.productSearchService.search(term);
        //     console.log(this.products);
        // });

        this.products = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.productSearchService.search(term) : Observable.of<Product[]>([]))
            .catch(error => {
               console.log(error);
               return Observable.of<Product[]>([]);
            });
    }

    gotoDetails(product: Product) {
        let link = ['/detail', product.id];
        this.router.navigate(link);
    }

}