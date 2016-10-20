import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
import { Cart } from './cart.model';

@Component ({
  selector: "list-albums",
  template: `

    <div class="row">
      <div class="col-xs-6">
        <select (change)="onChangeGenre($event.target.value)" class="form-control">
          <option value = "All" selected>All Genres</option>
          <option value = "Rock">Rock</option>
          <option value = "Folk">Folk</option>
          <option value = "Country">Country</option>
        </select>
      </div>
      <div class="col-xs-6">
        <select (change)="onChangeArtist($event.target.value)" class="form-control">
          <option value = "All" selected>All Artists</option>
          <option *ngFor="let album of albumsList" value="{{album.artist}}">{{album.artist}}</option>
        </select>
      </div>
    </div>

    <div *ngFor="let currentAlbum of albumsList | genrePipe:selectedGenre | artistPipe:selectedArtist" class="row">
      <hr>
      <div class="col-md-8 clickable" (click)="selectAlbum(currentAlbum)">
        <h2>{{currentAlbum.name}}</h2>
        <h3>By <strong>{{currentAlbum.artist}}</strong>({{currentAlbum.genre}})</h3>
        <img src='build/images/{{currentAlbum.albumArtFilePath}}' alt='album cover' class='image-albumCover'>
      </div>
      <div class="col-md-4 purchase-info">
        <h3>{{currentAlbum.price | currency:'USD':true:'1.2-2'}} </h3>
        <h4 *ngIf="currentAlbum.amountInStock>0">Only {{currentAlbum.amountInStock}} left in stock!</h4>
        <br>
        <button type="button" (click)="addToCartChild(currentAlbum)" class="form-control">Add to Cart</button>
        <h4 *ngIf="currentAlbum.amountInStock<=0" class="warning">CURRENTLY OUT OF STOCK</h4>
      </div>
    </div>
    `
})

export class ListAlbumsComponent {
  @Input() albumsList: Album[];
  @Input() currentUserCart: Cart;
  @Output() selectedAlbumSender = new EventEmitter();
  @Output() addAlbumToCartSender = new EventEmitter();

  selectedGenre: string = "All";
  selectedArtist: string = "All";

  selectAlbum(albumToEdit: Album) {
    this.selectedAlbumSender.emit(albumToEdit);
  }
  onChangeGenre(optionFromMenu) {
    this.selectedGenre = optionFromMenu;
  }
  onChangeArtist(optionFromMenu) {
    this.selectedArtist = optionFromMenu;
  }
  addToCartChild(chosenAlbum: Album){
    this.addAlbumToCartSender.emit(chosenAlbum);
  }
}
