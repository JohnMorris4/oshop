import {NgModule} from '@angular/core';
import {AdminProductsComponent} from 'app/admin/components/admin-products/admin-products.component';
import {AdminOrdersComponent} from 'app/admin/components/admin-orders/admin-orders.component';
import {ProductFormComponent} from 'app/admin/components/product-form/product-form.component';
import {AdminAuthGuard} from 'app/admin/services/admin-auth-guard.service';
import {SharedModule} from 'shared/shared.module';
import {RouterModule} from '@angular/router';
import {AuthGuard} from 'shared/services/auth-guard.service';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
    ])
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,

  ],

  providers: [
    AdminAuthGuard,
  ]
})
export class AdminModule { }
