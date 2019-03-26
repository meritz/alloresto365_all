(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thank-page-thank-page-module"],{

/***/ "./src/app/thank-page/thank-page.module.ts":
/*!*************************************************!*\
  !*** ./src/app/thank-page/thank-page.module.ts ***!
  \*************************************************/
/*! exports provided: ThankPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankPagePageModule", function() { return ThankPagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thank_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thank-page.page */ "./src/app/thank-page/thank-page.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _thank_page_page__WEBPACK_IMPORTED_MODULE_5__["ThankPagePage"]
    }
];
var ThankPagePageModule = /** @class */ (function () {
    function ThankPagePageModule() {
    }
    ThankPagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_thank_page_page__WEBPACK_IMPORTED_MODULE_5__["ThankPagePage"]]
        })
    ], ThankPagePageModule);
    return ThankPagePageModule;
}());



/***/ }),

/***/ "./src/app/thank-page/thank-page.page.html":
/*!*************************************************!*\
  !*** ./src/app/thank-page/thank-page.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding>\n\n    <ion-img src = \"../../assets/img/check-mark-297738_960_720.png\"></ion-img>\n\n    <h1>Thank your for your order</h1>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n       Non ut reprehenderit aliquam. Reprehenderit fugiat dolorem non rerum officiis magni ea sunt minus,\n        minima enim iste ipsam voluptatem quidem a alias.</p>\n\n        <ion-button expand=\"full\" (click)= \"backHome()\">Back to home</ion-button>\n\n      \n</ion-content>\n"

/***/ }),

/***/ "./src/app/thank-page/thank-page.page.scss":
/*!*************************************************!*\
  !*** ./src/app/thank-page/thank-page.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoYW5rLXBhZ2UvdGhhbmstcGFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/thank-page/thank-page.page.ts":
/*!***********************************************!*\
  !*** ./src/app/thank-page/thank-page.page.ts ***!
  \***********************************************/
/*! exports provided: ThankPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankPagePage", function() { return ThankPagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThankPagePage = /** @class */ (function () {
    function ThankPagePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ThankPagePage.prototype.ngOnInit = function () {
    };
    ThankPagePage.prototype.backHome = function () {
        this.navCtrl.navigateForward(['restaurants']);
    };
    ThankPagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thank-page',
            template: __webpack_require__(/*! ./thank-page.page.html */ "./src/app/thank-page/thank-page.page.html"),
            styles: [__webpack_require__(/*! ./thank-page.page.scss */ "./src/app/thank-page/thank-page.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], ThankPagePage);
    return ThankPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=thank-page-thank-page-module.js.map