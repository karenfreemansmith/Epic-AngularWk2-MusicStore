import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
import { Cart } from './cart.model';

@Component({
  selector: 'show-cart',
  template: `
    <h4>Welcome, {{currentUserCart.userName}}!</h4>
    <h3>Your Cart:</h3>
    <ul>
      <li>TEST</li>
    </ul>
    `
})

export class CartComponent {
  currentUserCart: Cart = new Cart();
}
