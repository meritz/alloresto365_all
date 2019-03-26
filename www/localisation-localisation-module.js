(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["localisation-localisation-module"],{

/***/ "./src/app/localisation/localisation.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/localisation/localisation.module.ts ***!
  \*****************************************************/
/*! exports provided: LocalisationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalisationPageModule", function() { return LocalisationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _localisation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localisation.page */ "./src/app/localisation/localisation.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _localisation_page__WEBPACK_IMPORTED_MODULE_5__["LocalisationPage"]
    }
];
var LocalisationPageModule = /** @class */ (function () {
    function LocalisationPageModule() {
    }
    LocalisationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_localisation_page__WEBPACK_IMPORTED_MODULE_5__["LocalisationPage"]]
        })
    ], LocalisationPageModule);
    return LocalisationPageModule;
}());



/***/ }),

/***/ "./src/app/localisation/localisation.page.html":
/*!*****************************************************!*\
  !*** ./src/app/localisation/localisation.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <!-- <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons> -->\n        <ion-title>\n         LIEU DE LIVRAISON\n        </ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n      <ion-label position=\"floating\">Choisissez votre ville</ion-label>\n    <ion-input type=\"text\" ></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label position=\"floating\">Choisissez votre quartieir</ion-label>\n      <ion-input type=\"text\" ></ion-input>\n    </ion-item>\n    <p><ion-icon name=\"pin\" color=\"danger\"></ion-icon>&nbsp;&nbsp; Ma position actuelle</p>\n    <br>\n    <br>\n    <br>\n    <div>\n        <img src=\"../../assets/img/abendessen-essen-essensfotografie-958545.jpg\">\n    </div>\n    \n    <br>\n    <ion-button expand=\"full\" shape=\"round\" color=\"primary\" (click)=\"openrestaurent()\">VOIR LES RESTAURANTS</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/localisation/localisation.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/localisation/localisation.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2FsaXNhdGlvbi9sb2NhbGlzYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/localisation/localisation.page.ts":
/*!***************************************************!*\
  !*** ./src/app/localisation/localisation.page.ts ***!
  \***************************************************/
/*! exports provided: LocalisationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalisationPage", function() { return LocalisationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalisationPage = /** @class */ (function () {
    function LocalisationPage(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
    }
    LocalisationPage.prototype.ngOnInit = function () {
    };
    LocalisationPage.prototype.openrestaurent = function () {
        this.router.navigate(['restaurants']);
    };
    LocalisationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-localisation',
            template: __webpack_require__(/*! ./localisation.page.html */ "./src/app/localisation/localisation.page.html"),
            styles: [__webpack_require__(/*! ./localisation.page.scss */ "./src/app/localisation/localisation.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LocalisationPage);
    return LocalisationPage;
}());



/***/ })

}]);
//# sourceMappingURL=localisation-localisation-module.js.map