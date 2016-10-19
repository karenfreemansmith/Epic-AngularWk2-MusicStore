import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: "genrePipe",
  pure: false
})

export class GenrePipe implements PipeTransform {
  transform (input: Album[], genre){
    var output: Album[] =[];
    if(genre==="Rock"){
      for (var i = 0; i < input.length; i++) {
        if(input[i].genre==="Rock") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(genre==="Folk") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].genre==="Folk") {
          output.push(input[i]);
        }
      }
      return output;
    } else if(genre==="Country") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].genre==="Country") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
