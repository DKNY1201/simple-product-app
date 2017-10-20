import {FormControl, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs/Observable";

export class Utils {
    static validatePrice(control: FormControl): ValidationErrors | null {
        const pattern = /^\d+$/;
        if (!pattern.test(control.value)) {
            return {notANumber: true}
        }
        return null;
    }

    static validateUniqueProductIDPromise(control: FormControl): Observable<any> | Promise<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                if( control.value === "P123" ) {
                    resolve(
                        { uniqueProductID: true }
                    )
                } else {
                    resolve(null);
                }
            }, 1000);
        })
    }

    static validateUniqueProductIDObservable(control: FormControl): Observable<any> | Promise<any> {

        if (control.value === "P123") {
            return Observable.of({uniqueProductID: true});
        } else {
            return Observable.of(null);
        }
    }
}