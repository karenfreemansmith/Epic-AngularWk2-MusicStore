import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Karen & Zack's Oldies but Goodies</h1>
    <div class="row">
      <div class="col-sm-8">
        <list-albums
          [albumsList] = "masterAlbumsList"
        ></list-albums>
      </div>
      <div class="col-sm-4">
        <new-album></new-album>
        <edit-album></edit-album>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterAlbumsList: Album[] = [
    new Album("NAME1", "ARTIST1", "GENRE1", "placeholder.png", 9.95, 10),
    new Album("NAME2", "ARTIST2", "GENRE2", "placeholder.png", 9.95, 10),
    new Album("NAME3", "ARTIST3", "GENRE3", "placeholder.png", 9.95, 10)
  ];
  // addAlbum(newAlbumFromChild: Album) {
  //   this.masterAlbumList.push(newAlbumFromChild);
  // }
  // selectedAlbum: Album = null;
  // showDetails(clickedAlbum: Album) {
  //   this.selectedAlbum = clickedAlbum;
  // }
  // finishedUpdate() {
  //   this.selectedAlbum = null;
  // }
}
