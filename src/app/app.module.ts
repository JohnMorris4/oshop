import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AdminAuthGuard} from 'app/admin/services/admin-auth-guard.service';

import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {LoginComponent} from 'app/core/components/login/login.component';
import {ProductsComponent} from 'app/shopping/components/products/products.component';
import {SharedModule} from 'shared/shared.module';
import {AdminModule} from 'app/admin/admin.module';
import {ShoppingModule} from 'app/shopping/shopping.module';
import {CoreModule} from 'app/core/core.module';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    CoreModule,
    ShoppingModule,
    SharedModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      // Basic view routes
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent }
    ])
],
  providers: [
    AdminAuthGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
