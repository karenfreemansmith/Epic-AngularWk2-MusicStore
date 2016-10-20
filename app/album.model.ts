export class Album {
  public amountInCart: number = 0;
  constructor(public name: string, public artist: string, public genre: string, public albumArtFilePath: string, public price: number, public amountInStock: number) {}

  reduceInventory() {
    this.amountInStock--;
    this.amountInCart++;
  }
  calculateCost() {
    return this.amountInCart * this.price;
  }
}
