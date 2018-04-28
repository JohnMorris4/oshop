import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class OrderService {

  constructor(private db:AngularFireDatabase) { }


  storeOrder(order) {
    this.db.list('/orders').push(order);
  }
}
