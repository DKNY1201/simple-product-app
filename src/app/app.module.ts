import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {ProductsComponent} from './products.component';
import {ProductDetailComponent} from "./product-detail.component";
import {ProductService} from "./product.service";
import {DashBoardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        ProductDetailComponent,
        ProductsComponent,
        DashBoardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
