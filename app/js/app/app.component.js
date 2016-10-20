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
var cart_model_1 = require("./cart.model");
var AppComponent = (function () {
    function AppComponent() {
        this.masterAlbumsList = [
            new album_model_1.Album("Abbey Road", "The Beatles", "Rock", "beatles-abbey.jpg", 19.95, 20),
            new album_model_1.Album("Blood on the Tracks", "Bob Dylan", "Folk", "dylan-blood.jpg", 14.95, 15),
            new album_model_1.Album("Stardust", "Willie Nelson", "Country", "nelson-stardust.jpg", 9.95, 10)
        ];
        this.cartAlbumList = [];
        this.currentCart = new cart_model_1.Cart();
        this.clickedAlbum = null;
        this.totalCart = 0;
    }
    AppComponent.prototype.addAlbum = function (newAlbumToAdd) {
        this.masterAlbumsList.push(newAlbumToAdd);
    };
    AppComponent.prototype.editAlbum = function (clickedAlbum2) {
        console.log(clickedAlbum2);
        this.clickedAlbum = clickedAlbum2;
    };
    AppComponent.prototype.finishedUpdate = function () {
        this.clickedAlbum = null;
    };
    AppComponent.prototype.login = function (optionFromMenu) {
        this.currentCart.userName = optionFromMenu;
        // this.loginEmitter.emit(this.currentCart);
    };
    AppComponent.prototype.reallyaddToCart = function (selectedAlbum) {
        if (!this.cartAlbumList.includes(selectedAlbum)) {
            this.cartAlbumList.push(selectedAlbum);
        }
        selectedAlbum.reduceInventory();
        this.totalCart = 0;
        for (var _i = 0, _a = this.cartAlbumList; _i < _a.length; _i++) {
            var album = _a[_i];
            this.totalCart += album.calculateCost();
        }
        ;
        // if(selectedAlbum.amountInStock<=0) {
        //   this.masterAlbumsList.splice(this.masterAlbumsList.indexOf(selectedAlbum), 1);
        // }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1>Karen & Zack's<br>Oldies but Goodies</h1>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-sm-offset-8\">\n        <select (change)=\"login($event.target.value)\" class=\"form-control\">\n          <option value=\"guest\" selected>Customer</option>\n          <option value=\"owner\">Store Owner</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div class=\"inner-box\">\n          <list-albums\n            [albumsList] = \"masterAlbumsList\"\n            (selectedAlbumSender) = \"editAlbum($event)\"\n            (addAlbumToCartSender) = \"reallyaddToCart($event)\"\n          ></list-albums>\n          <!--<list-albums\n\n            [currentUserCart] = \"currentCart\"\n            (addAlbumToCartSender) = \"addtoCart($event)\"\n          ></list-albums>-->\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div *ngIf=\"currentCart.userName==='owner'\" class=\"inner-box\">\n          <new-album\n            [selectedAlbum] = \"clickedAlbum\"\n            (newAlbumSender) = \"addAlbum($event)\"\n          ></new-album>\n          <edit-album\n            [selectedAlbum] = \"clickedAlbum\"\n            (editAlbumSender) = \"finishedUpdate()\"\n          ></edit-album>\n        </div>\n        <div *ngIf=\"currentCart.userName==='guest'\" class=\"inner-box\">\n          <show-cart\n            [albumsList] = \"cartAlbumList\"\n            [cartTotal] = \"totalCart\"\n          ></show-cart>\n          <!--<show-cart\n            [selectedAlbum] = \"clickedAlbum\"\n          ></show-cart>-->\n        </div>\n      </div>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map