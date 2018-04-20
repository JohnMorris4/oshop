import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getCart(cartId: string){
    return this.db.object('/shopping-carts/' + cartId);
  }

  private async getOrCreateCartId(){
    let cartId = localStorage.getItem('cartId');

    if(cartId) return cartId;
    
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
        
  }
  async addToCart(product: Product){
    let cartId = await this.getOrCreateCartId();
    let items$ = this.db.object('/shopping-carts/'+ cartId + '/items/' + product.$key);
    items$.take(1).subscribe(item => {
      if(item.$exists()) items$.update({ quantity: item.quantity + 1 });
      else items$.set({ product: product, quantity: 1});
    });
  }
}
