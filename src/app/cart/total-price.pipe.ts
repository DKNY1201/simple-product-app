import {Pipe, PipeTransform} from "@angular/core";
import {Product} from "../product";

@Pipe({
    name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {
    transform(product: Product, quantity: number) {
        if (!product) {
            return null;
        }

        return product.price * quantity;
    }
}