import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
import { Cart } from './cart.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
    <div class="container">
      <h1>Karen & Zack's<br>Oldies but Goodies</h1>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-sm-offset-8">
        <select (change)="login($event.target.value)" class="form-control">
          <option value="guest" selected>Customer</option>
          <option value="owner">Store Owner</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <div class="inner-box">
          <list-albums
            [albumsList] = "masterAlbumsList"
            (selectedAlbumSender) = "editAlbum($event)"
            (addAlbumToCartSender) = "reallyaddToCart($event)"
          ></list-albums>
          <!--<list-albums

            [currentUserCart] = "currentCart"
            (addAlbumToCartSender) = "addtoCart($event)"
          ></list-albums>-->
        </div>
      </div>
      <div class="col-sm-4">
        <div *ngIf="currentCart.userName==='owner'" class="inner-box">
          <new-album
            [selectedAlbum] = "clickedAlbum"
            (newAlbumSender) = "addAlbum($event)"
          ></new-album>
          <edit-album
            [selectedAlbum] = "clickedAlbum"
            (editAlbumSender) = "finishedUpdate()"
          ></edit-album>
        </div>
        <div *ngIf="currentCart.userName==='guest'" class="inner-box">
          <show-cart
            [albumsList] = "cartAlbumList"
          ></show-cart>
          <!--<show-cart
            [selectedAlbum] = "clickedAlbum"
          ></show-cart>-->
        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterAlbumsList: Album[] = [
    new Album("Abbey Road", "The Beatles", "Rock", "beatles-abbey.jpg", 19.95, 20),
    new Album("Blood on the Tracks", "Bob Dylan", "Folk", "dylan-blood.jpg", 14.95, 15),
    new Album("Stardust", "Willie Nelson", "Country", "nelson-stardust.jpg", 9.95, 10)
  ];
  public cartAlbumList: Album[] = [];
  currentCart: Cart = new Cart();
  clickedAlbum: Album = null;

  addAlbum(newAlbumToAdd: Album) {
    this.masterAlbumsList.push(newAlbumToAdd);
  }
  editAlbum(clickedAlbum2: Album) {
    console.log(clickedAlbum2);
    this.clickedAlbum = clickedAlbum2;
  }
  finishedUpdate() {
    this.clickedAlbum = null;
  }
  login(optionFromMenu) {
    this.currentCart.userName = optionFromMenu;
      // this.loginEmitter.emit(this.currentCart);
  }
  reallyaddToCart(selectedAlbum: Album) {
    console.log(selectedAlbum);
    if(!this.cartAlbumList.includes(selectedAlbum)) {
      this.cartAlbumList.push(selectedAlbum);
    }
    selectedAlbum.reduceInventory();
    // if(selectedAlbum.amountInStock<=0) {
    //   this.masterAlbumsList.splice(this.masterAlbumsList.indexOf(selectedAlbum), 1);
    // }

  }
}
