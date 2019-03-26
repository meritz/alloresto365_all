(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-detail-menu-detail-module"],{

/***/ "./src/app/menu-detail/menu-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/menu-detail/menu-detail.module.ts ***!
  \***************************************************/
/*! exports provided: MenuDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDetailPageModule", function() { return MenuDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-detail.page */ "./src/app/menu-detail/menu-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _menu_detail_page__WEBPACK_IMPORTED_MODULE_5__["MenuDetailPage"]
    }
];
var MenuDetailPageModule = /** @class */ (function () {
    function MenuDetailPageModule() {
    }
    MenuDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_detail_page__WEBPACK_IMPORTED_MODULE_5__["MenuDetailPage"]]
        })
    ], MenuDetailPageModule);
    return MenuDetailPageModule;
}());



/***/ }),

/***/ "./src/app/menu-detail/menu-detail.page.html":
/*!***************************************************!*\
  !*** ./src/app/menu-detail/menu-detail.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>menu-detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/menu-detail/menu-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/menu-detail/menu-detail.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtZGV0YWlsL21lbnUtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/menu-detail/menu-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/menu-detail/menu-detail.page.ts ***!
  \*************************************************/
/*! exports provided: MenuDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDetailPage", function() { return MenuDetailPage; });
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

var MenuDetailPage = /** @class */ (function () {
    function MenuDetailPage() {
    }
    MenuDetailPage.prototype.ngOnInit = function () {
    };
    MenuDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-detail',
            template: __webpack_require__(/*! ./menu-detail.page.html */ "./src/app/menu-detail/menu-detail.page.html"),
            styles: [__webpack_require__(/*! ./menu-detail.page.scss */ "./src/app/menu-detail/menu-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuDetailPage);
    return MenuDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-detail-menu-detail-module.js.map