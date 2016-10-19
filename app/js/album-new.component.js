"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var album_model_1 = require('./album.model');
var NewAlbumComponent = (function () {
    function NewAlbumComponent() {
        this.newAlbumSender = new core_1.EventEmitter();
    }
    NewAlbumComponent.prototype.addClicked = function (name, artist, genre, file, price, amount) {
        if ((name !== '') && (artist !== '') && (genre !== '') && (price > 0) && (amount > 0)) {
            var filename = "placeholder.png";
            if (file !== null) {
                filename = file;
            }
            var newAlbumToAdd = new album_model_1.Album(name, artist, genre, filename, price, amount);
            this.newAlbumSender.emit(newAlbumToAdd);
        }
        else {
            alert("You need to fill in more information to add this album!");
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', album_model_1.Album)
    ], NewAlbumComponent.prototype, "selectedAlbum", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewAlbumComponent.prototype, "newAlbumSender", void 0);
    NewAlbumComponent = __decorate([
        core_1.Component({
            selector: "new-album",
            template: "\n  <div *ngIf=\"selectedAlbum===null\">\n    <h3>New Album:</h3>\n    <div class=\"form-group\">\n      <label>Enter Album Name: </label>\n      <input #newName class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Album Artist: </label>\n      <input #newArtist class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Album Genre: </label>\n      <input #newGenre class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Album Art Filename: </label>\n      <input #newCoverArt class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Album Price: </label>\n      <input #newPrice class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Number of Albums in Inventory: </label>\n      <input #newAmount class=\"form-control\">\n    </div>\n    <button (click)=\"\n      addClicked(newName.value, newArtist.value, newGenre.value, newCoverArt.value, newPrice.value, newAmount.value);\n      newName.value='';\n      newArtist.value='';\n      newGenre.value='';\n      newCoverArt.value='';\n      newPrice.value='';\n      newAmount.value='';\n    \" class=\"btn form-control\">Add Album</button>\n  </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NewAlbumComponent);
    return NewAlbumComponent;
}());
exports.NewAlbumComponent = NewAlbumComponent;
//# sourceMappingURL=album-new.component.js.map