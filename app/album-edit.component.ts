import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: "edit-album",
  template: `
    <div *ngIf="selectedAlbum !== null">
    <!--<div>-->
      <h3>Edit Album:</h3>
      <div class="form-group">
        <label>Enter Album Name: </label>
        <input [(ngModel)]="selectedAlbum.name" class="form-control">
      </div>
      <div class="form-group">
        <label>Enter Album Artist: </label>
        <input [(ngModel)]="selectedAlbum.artist" class="form-control">
      </div>
      <div class="form-group">
        <label>Enter Album Genre: </label>
        <input [(ngModel)]="selectedAlbum.genre" class="form-control">
      </div>
      <div class="form-group">
        <label>Enter Album Art Filename: </label>
        <input [(ngModel)]="selectedAlbum.albumArtFilePath" class="form-control">
      </div>
      <div class="form-group">
        <label>Enter Album Price: </label>
        <input [(ngModel)]="selectedAlbum.price" class="form-control">
      </div>
      <div class="form-group">
        <label>Enter Number of Albums in Inventory: </label>
        <input [(ngModel)]="selectedAlbum.amountInStock" class="form-control">
      </div>
      <button (click)="editClicked()" class="btn form-control">Submit Changes</button>
    </div>
    `
})

export class EditAlbumComponent {
  @Input() selectedAlbum: Album;
  @Output() editAlbumSender = new EventEmitter();

  editClicked() {
    this.editAlbumSender.emit();
  }
}
