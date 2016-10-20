import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
import { Cart } from './cart.model';

@Component({
  selector: 'show-cart',
  template: `

    <h3>Your Cart:</h3>
    <div *ngFor="let currentAlbum of albumsList">
      <h4>{{currentAlbum.name}}</h4>
      <h4>By <strong>{{currentAlbum.artist}}</strong>({{currentAlbum.genre}})</h4>
      <p> {{currentAlbum.amountInCart}} x {{currentAlbum.price | currency:'USD':true:'1.2-2'}} = {{currentAlbum.calculateCost() | currency:'USD':true:'1.2-2'}}</p>
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
