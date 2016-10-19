import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

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
      <div class="col-sm-8">
        <div class="inner-box">
          <list-albums
            [albumsList] = "masterAlbumsList"
            (selectedAlbumSender) = "editAlbum($event)"
          ></list-albums>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="inner-box">
          <new-album
            [selectedAlbum] = "clickedAlbum"
            (newAlbumSender) = "addAlbum($event)"
          ></new-album>
          <edit-album
            [selectedAlbum] = "clickedAlbum"
            (editAlbumSender) = "finishedUpdate()"
          ></edit-album>
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
}
