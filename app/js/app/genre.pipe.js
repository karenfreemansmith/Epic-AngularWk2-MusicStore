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
var GenrePipe = (function () {
    function GenrePipe() {
    }
    GenrePipe.prototype.transform = function (input, genre) {
        var output = [];
        if (genre === "Rock") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].genre === "Rock") {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (genre === "Folk") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].genre === "Folk") {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (genre === "Country") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].genre === "Country") {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else {
            return input;
        }
    };
    return GenrePipe;
}());
GenrePipe = __decorate([
    core_1.Pipe({
        name: "genrePipe",
        pure: false
    }),
    __metadata("design:paramtypes", [])
], GenrePipe);
exports.GenrePipe = GenrePipe;
//# sourceMappingURL=genre.pipe.js.map