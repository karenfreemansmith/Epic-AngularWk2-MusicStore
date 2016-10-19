import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component ({
  selector: "list-albums",
  template: `
    <div *ngFor="let currentAlbum of albumsList">
      <h2>{{currentAlbum.name}}</h2>
    </div>
    `
})

export class ListAlbumsComponent {
  @Input() albumsList: Album[];
  // @Output()
}
