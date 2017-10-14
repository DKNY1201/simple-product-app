import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {ProductsComponent} from './products.component';
import {ProductDetailComponent} from "./product-detail.component";
import {ProductService} from "./product.service";
import {DashBoardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";

// Imports for loading & configuring the in-memory web api
import {HttpClientModule} from "@angular/common/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {ProductSearchComponent} from "./product-search.component";

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
        HttpModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
