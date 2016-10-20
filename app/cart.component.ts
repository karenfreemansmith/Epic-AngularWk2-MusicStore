import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
import { Cart } from './cart.model';

@Component({
  selector: 'show-cart',
  template: `
    
    <h3>Your Cart:</h3>
    <div *ngFor="let currentAlbum of albumsList" class="row">
      <h2>{{currentAlbum.name}}</h2>
      <h3>By <strong>{{currentAlbum.artist}}</strong>({{currentAlbum.genre}})</h3>
      <p> {{currentAlbum.amountInCart}} x = {{currentAlbum.amountInCart * (currentAlbum.price | currency:'USD':true:'1.2-2')}} </p>
      <p></p>
    </div>
    `
})

export class CartComponent {
  @Input() albumsList: Album[];
  //currentUserCart: Cart = new Cart();
  //currentUserCart.cartContents.push(selectedAlbum);
}
