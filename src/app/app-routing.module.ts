import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {ProductsComponent} from "./products.component";
import {DashBoardComponent} from "./dashboard.component";
import {ProductDetailComponent} from "./product-detail.component";

const routes: Route[] = [
    { path: 'products', component: ProductsComponent},
    { path: 'dashboard', component: DashBoardComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'detail/:id', component: ProductDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}