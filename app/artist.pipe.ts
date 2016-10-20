import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: "artistPipe",
  pure: false
})

export class ArtistPipe implements PipeTransform {
  transform (input: Album[], artist){
    var output: Album[] =[];

    if(artist !== "All") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].artist===artist) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}
