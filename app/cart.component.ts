import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
import { Cart } from './cart.model';

@Component({
  selector: 'show-cart',
  template: `

    <h3>Your Cart:</h3>
    <div *ngFor="let currentAlbum of albumsList">
      <hr>
      <h4>({{currentAlbum.amountInCart}}) {{currentAlbum.name}}, {{currentAlbum.artist}}</h4>
      <h5 *ngIf="currentAlbum.amountInCart>1">Price per Unit: {{currentAlbum.price | currency:'USD':true:'1.2-2'}}</h5>
      <h4>Price: {{currentAlbum.calculateCost() | currency:'USD':true:'1.2-2'}}</h4>
    </div>
    <h3>Total:</h3>
    <h3>{{ cartTotal | currency:'USD':true:'1.2-2'}}</h3>
    `
})

export class CartComponent {
  @Input() albumsList: Album[];
  @Input() cartTotal: number;
  //currentUserCart: Cart = new Cart();
  //currentUserCart.cartContents.push(selectedAlbum);

}
