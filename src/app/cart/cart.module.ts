import {NgModule} from "@angular/core";

import {CartComponent} from "./cart.component";
import {CommonModule} from "@angular/common";
import {CartService} from "./cart.service";
import {TotalPricePipe} from "./total-price.pipe";

@NgModule({
    declarations: [
        CartComponent,
        TotalPricePipe
    ],
    imports: [CommonModule],
    exports: [CartComponent],
    providers: [CartService]
})
export class CartModule {}