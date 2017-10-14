import {NgModule} from "@angular/core";

import {CartComponent} from "./cart.component";
import {CommonModule} from "@angular/common";
import {CartService} from "./cart.service";

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [CommonModule],
    exports: [CartComponent],
    providers: [CartService]
})
export class CartModule {}