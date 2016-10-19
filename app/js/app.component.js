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
var AppComponent = (function () {
    function AppComponent() {
        this.masterAlbumsList = [
            new album_model_1.Album("NAME1", "ARTIST1", "GENRE1", "placeholder.png", 9.95, 10),
            new album_model_1.Album("NAME2", "ARTIST2", "GENRE2", "placeholder.png", 9.95, 10),
            new album_model_1.Album("NAME3", "ARTIST3", "GENRE3", "placeholder.png", 9.95, 10)
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n    <h1>Karen & Zack's Oldies but Goodies</h1>\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <list-albums\n          [albumsList] = \"masterAlbumsList\"\n        ></list-albums>\n      </div>\n      <div class=\"col-sm-4\">\n        <new-album></new-album>\n        <edit-album></edit-album>\n      </div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map