(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["promo-promo-module"],{

/***/ "./src/app/promo/promo.module.ts":
/*!***************************************!*\
  !*** ./src/app/promo/promo.module.ts ***!
  \***************************************/
/*! exports provided: PromoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoPageModule", function() { return PromoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _promo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promo.page */ "./src/app/promo/promo.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _promo_page__WEBPACK_IMPORTED_MODULE_5__["PromoPage"]
    }
];
var PromoPageModule = /** @class */ (function () {
    function PromoPageModule() {
    }
    PromoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_promo_page__WEBPACK_IMPORTED_MODULE_5__["PromoPage"]]
        })
    ], PromoPageModule);
    return PromoPageModule;
}());



/***/ }),

/***/ "./src/app/promo/promo.page.html":
/*!***************************************!*\
  !*** ./src/app/promo/promo.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n    <ion-title>promo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n\n    <ion-card>\n      <ion-button class=\"card-cart\"><ion-icon  name=\"cart\"></ion-icon></ion-button>\n      <img src=\"../../assets/img/promo/2000.jpg\"/>\n      <div class=\"card-title\">Madison</div>\n      <div class=\"card-subtitle\">28 Listings</div>\n    </ion-card>\n  \n    <ion-card>\n      <ion-button class=\"card-cart\"><ion-icon  name=\"cart\"></ion-icon></ion-button>\n      <img src=\"../../assets/img/promo/2000.jpg\"/>\n      <div class=\"card-title\">Madison</div>\n      <div class=\"card-subtitle\">28 Listings</div>\n    </ion-card>\n  \n    <ion-card>\n      <ion-button class=\"card-cart\"><ion-icon  name=\"cart\"></ion-icon></ion-button>\n      <img src=\"../../assets/img/promo/2000.jpg\"/>\n      <div class=\"card-title\">Madison</div>\n      <div class=\"card-subtitle\">28 Listings</div>\n    </ion-card>\n  \n    <ion-card>\n      <ion-button class=\"card-cart\"><ion-icon  name=\"cart\"></ion-icon></ion-button>\n      <img src=\"../../assets/img/promo/2000.jpg\"/>\n      <div class=\"card-title\">Madison</div>\n      <div class=\"card-subtitle\">28 Listings</div>\n    </ion-card>\n  \n  </ion-content>\n"

/***/ }),

/***/ "./src/app/promo/promo.page.scss":
/*!***************************************!*\
  !*** ./src/app/promo/promo.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-background-page ion-card {\n  position: relative;\n  text-align: center; }\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 70%;\n  margin-left: 15px;\n  font-size: 2.0em;\n  font-weight: bold;\n  color: #ffffff; }\n\n.card-background-page .card-subtitle {\n  font-size: 1.0em;\n  position: absolute;\n  margin-left: 15px;\n  top: 85%;\n  color: #fff; }\n\n.card-background-page .card-cart {\n  margin-left: 100px;\n  top: -2%;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbW8vQzpcXGlvbmljXFxhbGxvUmVzdG8zNjVfYWxsL3NyY1xcYXBwXFxwcm9tb1xccHJvbW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUp4QjtFQVFNLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQWJwQjtFQWlCTSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQXJCakI7RUF5Qk0sa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb21vL3Byb21vLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDcwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICBcclxuICAgIC5jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgdG9wOiA4NSU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWNhcnR7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgICAgdG9wOiAtMiU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/promo/promo.page.ts":
/*!*************************************!*\
  !*** ./src/app/promo/promo.page.ts ***!
  \*************************************/
/*! exports provided: PromoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoPage", function() { return PromoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PromoPage = /** @class */ (function () {
    function PromoPage() {
    }
    PromoPage.prototype.ngOnInit = function () {
    };
    PromoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promo',
            template: __webpack_require__(/*! ./promo.page.html */ "./src/app/promo/promo.page.html"),
            styles: [__webpack_require__(/*! ./promo.page.scss */ "./src/app/promo/promo.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PromoPage);
    return PromoPage;
}());



/***/ })

}]);
//# sourceMappingURL=promo-promo-module.js.map