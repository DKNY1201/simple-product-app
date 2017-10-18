import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {ProductsComponent} from './products.component';
import {ProductDetailComponent} from "./product-detail.component";
import {ProductService} from "./product.service";
import {DashBoardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {ProductSearchComponent} from "./product-search.component";
import {CartService} from "./cart/cart.service";
import {CartModule} from "./cart/cart.module";

@NgModule({
    declarations: [
        AppComponent,
        ProductDetailComponent,
        ProductsComponent,
        DashBoardComponent,
        ProductSearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        CartModule
    ],
    providers: [ProductService, CartService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
