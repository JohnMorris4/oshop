import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../models/order';
import {Router} from '@angular/router';
import {OrderService} from '../order.service';
import {ShoppingCart} from '../models/shopping-cart';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../auth.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy{
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userId: string;
  userSubscription: Subscription;


  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService
  ){}

  ngOnInit() {
    this.userSubscription =  this.authService.user$.subscribe(user =>  this.userId = user.uid);
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }
}
