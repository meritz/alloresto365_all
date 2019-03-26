(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurants-restaurants-module"],{

/***/ "./src/app/restaurants/restaurants.module.ts":
/*!***************************************************!*\
  !*** ./src/app/restaurants/restaurants.module.ts ***!
  \***************************************************/
/*! exports provided: RestaurantsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsPageModule", function() { return RestaurantsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _restaurants_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurants.page */ "./src/app/restaurants/restaurants.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _restaurants_page__WEBPACK_IMPORTED_MODULE_5__["RestaurantsPage"]
    }
];
var RestaurantsPageModule = /** @class */ (function () {
    function RestaurantsPageModule() {
    }
    RestaurantsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_restaurants_page__WEBPACK_IMPORTED_MODULE_5__["RestaurantsPage"]]
        })
    ], RestaurantsPageModule);
    return RestaurantsPageModule;
}());



/***/ }),

/***/ "./src/app/restaurants/restaurants.page.html":
/*!***************************************************!*\
  !*** ./src/app/restaurants/restaurants.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Restaurants</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openCart()\">\n        <ion-badge *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\n        <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content fullscreen class=\"contentBody\">\n    <ion-grid>\n      <ion-row no-padding class=\"row_slider\">\n          <ion-col>\n              <ion-slides pager=\"true\"  slidesPerView=1 [options]=\"slideOpts\">\n                  <ion-slide *ngFor=\"let img of images\">\n                      <img src=\"../../assets/img/animee/{{img}}\">\n                  </ion-slide>\n                </ion-slides>\n            </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div *ngFor=\"let cat of items\" class=\"category-block\">\n      <ion-row no-padding class=\"category-banner\">\n        <ion-col text-center button tappable (click)=\"cat.expanded = !cat.expanded\" align-self-center>\n          {{ cat.category }}\n        </ion-col>\n      </ion-row>\n      <ion-slides [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let product of cat.products\">\n          <div *ngIf=\"cat.expanded\">\n            <ion-card class=\"card-background-page\">\n                <ion-badge slot=\"end\" class=\"formulPrice\">35 min</ion-badge>\n                <img src={{product.menutImage}}/>\n                <ion-card-content>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"7\">\n                        <ion-card-title>{{ product.name }}</ion-card-title>\n                      </ion-col >\n                      <ion-col size=\"5\">\n                        <h6>\n                            {{ product.price }}cfa\n                        </h6>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"8\">\n                          <p>Pizza+Salade+jus</p>\n                      </ion-col >\n                      <ion-col size=\"4\">\n                        <ion-button shape=\"round\" class=\"formulBntAjoute\" (click)=\"addToCart(product)\" >\n                          <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n                        </ion-button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card-content>\n                \n            </ion-card>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div >\n    <h6 class=\"restaurant\" text-center>LES RESTAURANTS</h6>\n    <div>\n        <ion-card class=\"card-background-page\" *ngFor=\"let restau of listRestaurant\" (click)=\"opendetail(restau)\">\n            <ion-badge slot=\"end\" class=\"formulPrice\">30 min</ion-badge>\n            <img src={{restau.firstImage}}/>\n            <ion-card-content >\n                <ion-card-title>\n                {{restau.name}}\n                </ion-card-title>\n                <ion-row>\n                    <ion-col>\n                        <p>{{restau.specialiter}}</p>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                <ion-col>\n                    <ion-icon name=\"star\" color=\"warning\"></ion-icon>\n                <span item-start>{{restau.note}} * $$$ </span>\n                </ion-col>\n            </ion-row>\n            </ion-card-content>\n          </ion-card>\n    </div>\n  \n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/restaurants/restaurants.page.scss":
/*!***************************************************!*\
  !*** ./src/app/restaurants/restaurants.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-badge {\n  color: #fff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%; }\n\n:host .category-block {\n  margin-bottom: 4px; }\n\n:host .category-banner {\n  border-left: 8px solid var(--ion-color-secondary);\n  background: var(--ion-color-secondary);\n  height: 80%;\n  padding: 10px;\n  color: #fff;\n  font-weight: 500; }\n\n:host .restaurant {\n  border-left: 8px solid var(--ion-color-secondary);\n  background: var(--ion-color-secondary);\n  font-weight: 500;\n  padding: 10px;\n  margin-top: 0px;\n  color: #fff; }\n\n:host .card-content-md {\n  padding-top: 5px;\n  line-height: 0.5;\n  padding-bottom: 0; }\n\n:host ion-col {\n  padding-bottom: 3px;\n  padding-top: 0px; }\n\n:host .card-content {\n  display: block;\n  position: relative;\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n:host .swiper-container-horizontal > .swiper-pagination-custom {\n  width: 40% !important; }\n\n:host .swiper-pagination-bullet-active {\n  background: #ffff !important; }\n\n:host .slide-zoom, :host .swiper-slide {\n  text-align: left; }\n\n:host .formulPrice {\n  color: #f60f0f;\n  background-color: white;\n  padding: 12px;\n  border-radius: 45%;\n  margin-top: -6px;\n  margin-right: -7px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudHMvQzpcXGlvbmljXFxhbGxvUmVzdG8zNjVfYWxsL3NyY1xcYXBwXFxyZXN0YXVyYW50c1xccmVzdGF1cmFudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS1EsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLG1CQUFtQixFQUFBOztBQVQzQjtFQWFRLGtCQUFrQixFQUFBOztBQWIxQjtFQWlCUSxpREFBaUQ7RUFDakQsc0NBQXNDO0VBQ3RDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQXRCeEI7RUF5QlEsaURBQWlEO0VBQ2pELHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBOUJuQjtFQWtDUyxnQkFBZ0I7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFnQixFQUFBOztBQXBDeEI7RUF3Q1EsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQXpDeEI7RUE2Q1EsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBaEQzQjtFQXNEUyxxQkFBcUIsRUFBQTs7QUF0RDlCO0VBMERRLDRCQUE0QixFQUFBOztBQTFEcEM7RUE2RFEsZ0JBQWdCLEVBQUE7O0FBN0R4QjtFQW1FUSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudHMvcmVzdGF1cmFudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cclxuICAgIFxyXG5cclxuICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcnktYmxvY2sge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIH1cclxuICAgICBcclxuICAgIC5jYXRlZ29yeS1iYW5uZXIge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnJlc3RhdXJhbnQge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtY29udGVudC1tZCB7XHJcbiAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7IFxyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWNvbHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7IFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSB7XHJcbiAgICAgICAgIHdpZHRoOiA0MCUgIWltcG9ydGFudDsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNsaWRlLXpvb20sIC5zd2lwZXItc2xpZGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG91ciBsYSBwYXJ0aSBkZSBmb3JtdWwgXHJcblxyXG4gICAgLmZvcm11bFByaWNle1xyXG4gICAgICAgIGNvbG9yOiAjZjYwZjBmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtN3B4O1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiBcclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/restaurants/restaurants.page.ts":
/*!*************************************************!*\
  !*** ./src/app/restaurants/restaurants.page.ts ***!
  \*************************************************/
/*! exports provided: RestaurantsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsPage", function() { return RestaurantsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/cart.service */ "./src/app/service/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RestaurantsPage = /** @class */ (function () {
    function RestaurantsPage(navCtrl, cartService, router) {
        this.navCtrl = navCtrl;
        this.cartService = cartService;
        this.router = router;
        this.images = ['2.jpg',
            '9.jpg',
            '3.jpg',
            '6.jpg',
            '3.jpg',
        ];
        this.slideOpts = {
            effect: 'flip',
            autoplay: true,
            loop: true,
        };
        this.cart = [];
        this.items = [];
        this.listRestaurant = [];
        this.sliderConfig = {
            slidesPerView: 1.18,
            spaceBetween: 3,
            centeredSlides: true
        };
    }
    RestaurantsPage.prototype.ngOnInit = function () {
        this.items = this.cartService.getProducts();
        console.log(this.cartService.getProducts());
        this.listRestaurant = this.cartService.getlistRestaurant();
        this.cart = this.cartService.getCart();
    };
    RestaurantsPage.prototype.addToCart = function (product) {
        this.cartService.addProduct(product);
    };
    RestaurantsPage.prototype.openCart = function () {
        this.router.navigate(['cart']);
    };
    RestaurantsPage.prototype.opendetail = function (restau) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.navigateForward(['detail-restaurant']);
                this.cartService.getlistRestaurant = restau;
                return [2 /*return*/];
            });
        });
    };
    RestaurantsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restaurants',
            template: __webpack_require__(/*! ./restaurants.page.html */ "./src/app/restaurants/restaurants.page.html"),
            styles: [__webpack_require__(/*! ./restaurants.page.scss */ "./src/app/restaurants/restaurants.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RestaurantsPage);
    return RestaurantsPage;
}());



/***/ })

}]);
//# sourceMappingURL=restaurants-restaurants-module.js.map