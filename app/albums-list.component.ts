import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: "list-albums",
  template: `
    <div *ngFor="let currentAlbum of albumsList" (click)="selectAlbum(currentAlbum)">
      <h2>{{currentAlbum.name}} ({{currentAlbum.genre}})</h2>
      <img src='build/images/{{currentAlbum.albumArtFilePath}}' alt='album cover' class='image-albumCover'>
      <p>By <strong>{{currentAlbum.artist}}</strong>: {{currentAlbum.price | currency:'USD':true:'1.2-2'}} </p>
      <p *ngIf="currentAlbum.amountInStock>0">IN STOCK</p>
    </div>
    `
})

export class ListAlbumsComponent {
  @Input() albumsList: Album[];
  @Output() selectedAlbumSender = new EventEmitter();

  selectAlbum(albumToEdit: Album) {
    // console.log(albumToEdit);
    this.selectedAlbumSender.emit(albumToEdit);
  }
}
