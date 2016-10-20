"use strict";
var Album = (function () {
    function Album(name, artist, genre, albumArtFilePath, price, amountInStock) {
        this.name = name;
        this.artist = artist;
        this.genre = genre;
        this.albumArtFilePath = albumArtFilePath;
        this.price = price;
        this.amountInStock = amountInStock;
        this.amountInCart = 0;
    }
    Album.prototype.reduceInventory = function () {
        this.amountInStock--;
        this.amountInCart++;
    };
    Album.prototype.calculateCost = function () {
        return this.amountInCart * this.price;
    };
    return Album;
}());
exports.Album = Album;
//# sourceMappingURL=album.model.js.map