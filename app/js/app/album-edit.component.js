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
var core_1 = require("@angular/core");
var album_model_1 = require("./album.model");
var EditAlbumComponent = (function () {
    function EditAlbumComponent() {
        this.editAlbumSender = new core_1.EventEmitter();
    }
    EditAlbumComponent.prototype.editClicked = function () {
        this.editAlbumSender.emit();
    };
    return EditAlbumComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", album_model_1.Album)
], EditAlbumComponent.prototype, "selectedAlbum", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditAlbumComponent.prototype, "editAlbumSender", void 0);
EditAlbumComponent = __decorate([
    core_1.Component({
        selector: "edit-album",
        template: "\n    <div *ngIf=\"selectedAlbum !== null\">\n    <!--<div>-->\n      <h3>Edit Album:</h3>\n      <div class=\"form-group\">\n        <label>Enter Album Name: </label>\n        <input [(ngModel)]=\"selectedAlbum.name\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Enter Album Artist: </label>\n        <input [(ngModel)]=\"selectedAlbum.artist\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Enter Album Genre: </label>\n        <input [(ngModel)]=\"selectedAlbum.genre\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Enter Album Art Filename: </label>\n        <input [(ngModel)]=\"selectedAlbum.albumArtFilePath\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Enter Album Price: </label>\n        <input [(ngModel)]=\"selectedAlbum.price\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Enter Number of Albums in Inventory: </label>\n        <input [(ngModel)]=\"selectedAlbum.amountInStock\" class=\"form-control\">\n      </div>\n      <button (click)=\"editClicked()\" class=\"btn form-control\">Submit Changes</button>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], EditAlbumComponent);
exports.EditAlbumComponent = EditAlbumComponent;
//# sourceMappingURL=album-edit.component.js.map