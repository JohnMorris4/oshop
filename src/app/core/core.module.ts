import {NgModule} from '@angular/core';
import {NavbarComponent} from 'app/core/components/navbar/navbar.component';
import {LoginComponent} from 'app/core/components/login/login.component';
import {HomeComponent} from 'app/core/components/home/home.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    NavbarComponent,
    LoginComponent,
    HomeComponent,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
