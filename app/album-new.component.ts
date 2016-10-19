import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: "new-album",
  template: `
  <div *ngIf="selectedAlbum===null">
    <h3>New Album:</h3>
    <div class="form-group">
      <label>Enter Album Name: </label>
      <input #newName class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Album Artist: </label>
      <input #newArtist class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Album Genre: </label>
      <input #newGenre class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Album Art Filename: </label>
      <input #newCoverArt class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Album Price: </label>
      <input #newPrice class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Number of Albums in Inventory: </label>
      <input #newAmount class="form-control">
    </div>
    <button (click)="
      addClicked(newName.value, newArtist.value, newGenre.value, newCoverArt.value, newPrice.value, newAmount.value);
      newName.value='';
      newArtist.value='';
      newGenre.value='';
      newCoverArt.value='';
      newPrice.value='';
      newAmount.value='';
    " class="btn form-control">Add Album</button>
  </div>
    `
})

export class NewAlbumComponent {
  @Input() selectedAlbum: Album;
  @Output() newAlbumSender = new EventEmitter();
  addClicked(name: string, artist: string, genre: string, file: string, price: number, amount: number) {
    if((name!=='')&&(artist!=='')&&(genre!=='')&&(price>0)&&(amount>0)) {
      var filename: string = "placeholder.png";
      if(file!==null) {
        filename = file;
      }
      var newAlbumToAdd: Album = new Album(name, artist, genre, filename, price, amount)
      this.newAlbumSender.emit(newAlbumToAdd);
    } else {
      alert("You need to fill in more information to add this album!");
    }
  }
}
