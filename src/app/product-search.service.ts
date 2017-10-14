import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Product} from "./product";
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class ProductSearchService {
    constructor(private http: Http){}

    search(term: string): Observable<Product[]> {
        return this.http.get(`api/products/?name=${term}`)
            .map(response => response.json() as Product[]);
    }
}