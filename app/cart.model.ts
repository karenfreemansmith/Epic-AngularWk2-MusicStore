import { Album } from './album.model';

export class Cart {
  public userName: string = "guest";
  public cartContents: Album[] = [];
  constructor() {}
}
