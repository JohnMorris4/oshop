import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from 'app/admin/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from 'app/admin/components/admin-orders/admin-orders.component';
import { ProductFormComponent } from 'app/admin/components/product-form/product-form.component';
import { AdminAuthGuard } from 'app/admin/services/admin-auth-guard.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { DataTableModule } from 'angular5-data-table';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from 'app/products/products.component';
import { ShoppingCartComponent } from 'app/shopping-cart/shopping-cart.component';
import { LoginComponent } from 'app/login/login.component';
import { CheckOutComponent } from 'app/check-out/check-out.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { OrderSuccessComponent } from 'app/order-success/order-success.component';
import { MyOrdersComponent } from 'app/my-orders/my-orders.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule,
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
