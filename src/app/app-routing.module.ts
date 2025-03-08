import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-listings/product-listings.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
