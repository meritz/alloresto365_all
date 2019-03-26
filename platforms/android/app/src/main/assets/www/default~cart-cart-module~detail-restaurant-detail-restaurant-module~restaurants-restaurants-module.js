(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-cart-module~detail-restaurant-detail-restaurant-module~restaurants-restaurants-module"],{

/***/ "./src/app/service/cart.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/cart.service.ts ***!
  \*****************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
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

var CartService = /** @class */ (function () {
    function CartService() {
        this.data = [
            {
                category: 'LES FORMULES',
                expanded: true,
                products: [
                    { id: 0, name: 'SftRegal', price: '3000', menutImage: '../../assets/img/animee/9.jpg' },
                    { id: 1, name: 'SweetRegal', price: '3500', menutImage: '../../assets/img/animee/4.jpg' },
                    { id: 2, name: 'Akoumé ', price: '3000', menutImage: '../../assets/img/animee/9.jpg' },
                    { id: 3, name: ' Djékoumé', price: '3000', menutImage: '../../assets/img/animee/6.jpg' },
                    { id: 4, name: ' Fried rice', price: '3000', menutImage: '../../assets/img/animee/4.jpg' },
                    { id: 5, name: 'Riz au gras', price: '3000', menutImage: '../../assets/img/animee/9.jpg' },
                ]
            },
        ];
        //
        //
        this.listRestaurant = [
            {
                name: 'SHALOM',
                firstImage: '../../assets/img/restaurant/142601_cropped_900_550_70_58ac2fa906b14_restaurant-sofitel.jpg',
                specialiter: 'Poulet * Pizza * Salades * Sandwiches',
                note: 2.8,
                products: [{
                        expanded: true,
                        category: 'entre',
                        plats: [
                            // tslint:disable-next-line:max-line-length
                            { id: 6, name: 'Ham & Egg', price: '2000', menutImage: '../../assets/img/plat-fon/14702362_670926693058767_2957661286413590959_n.jpg' },
                            { id: 7, name: 'Basic', price: '7480', menutImage: '../../assets/img/plat-fon/6153495191491945652.jpg' },
                            { id: 8, name: 'Spagueti', price: '1000', menutImage: '../../assets/img/plat-fon/Bases-Photo-culinaire-679x350.jpg' },
                            { id: 8, name: 'botokoin', price: '2000', menutImage: '../../assets/img/plat-fon/c-abc3a9gan.jpg' },
                            { id: 8, name: 'ablo', price: '2500', menutImage: '../../assets/img/plat-fon/causa.jpg' },
                            { id: 8, name: 'akpan', price: '3500', menutImage: '../../assets/img/plat-fon/COsb1ayVEAAJJsK.jpg' },
                            { id: 8, name: 'gali', price: '4300', menutImage: '../../assets/img/plat-fon/p3158_750x459_10.jpg' },
                            { id: 8, name: 'aloko+poisson', price: '8500', menutImage: '../../assets/img/plat-fon/photo-culinaire-vacherin.jpg' },
                        ]
                    },
                    {
                        category: 'jus',
                        plats: [
                            { id: 6, name: 'liora', price: '8', menutImage: '../../assets/img/jus/000021392.jpg' },
                            { id: 7, name: 'liora bio', price: '5', menutImage: '../../assets/img/jus/23601-0w345h345_Jus_Pomme_100_Jus.jpg' },
                            { id: 8, name: 'baobab', price: '9', menutImage: '../../assets/img/jus/50019-2.jpg' }
                        ]
                    },
                    {
                        category: 'resitance',
                        plats: [
                            { id: 6, name: 'poison braise', price: '8', menutImage: '../../assets/img/plats/336143-svetik.jpg' },
                            { id: 7, name: 'salade', price: '5', menutImage: '../../assets/img/plats/6186cd7be2f46a7cd7b4f51c5501c9c7.png' },
                            { id: 8, name: 'Ceaser gombo', price: '9', menutImage: '../../assets/img/plats/7584650-11709219.jpg' },
                            { id: 8, name: 'Ceaser gombo', price: '9', menutImage: '../../assets/img/gris/_a6a9764-2-copie.jpg' },
                            { id: 8, name: 'Ceaser gombo', price: '9', menutImage: '../../assets/img/gris/_a6a9794-2-copie.jpg' },
                        ]
                    },
                ]
            },
            {
                name: 'TALIE',
                firstImage: '../../assets/img/restaurant/1456839997_vatelrestaurant_Slider1-paris.jpg',
                specialiter: 'Poulet * Pizza * Salades * Sandwiches',
                note: 2.8,
                products: [{
                        expanded: true,
                        category: 'entre',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                    {
                        category: 'jus',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                    {
                        category: 'resitance',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                ]
            },
            {
                name: 'RUMBA',
                firstImage: '../../assets/img/restaurant/H117-810x565.jpg',
                specialiter: 'Poulet * Pizza * Salades * Sandwiches',
                note: 2.8,
                products: [{
                        expanded: true,
                        category: 'entre',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                    {
                        category: 'jus',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                    {
                        category: 'resitance',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                ]
            },
            {
                name: 'KING PLACE',
                firstImage: '../../assets/img/restaurant/Hotel_restaurant_St_Nicolas©Panoramaweb-11-Copier.jpg',
                specialiter: 'Poulet * Pizza * Salades * Sandwiches',
                note: 2.8,
                products: [{
                        expanded: true,
                        category: 'entre',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                    {
                        category: 'jus',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                    {
                        category: 'resitance',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                ]
            },
            {
                name: 'CUSINE',
                firstImage: '../../assets/img/restaurant/manavabeachresortmoorea_restaurant_14.jpg',
                specialiter: 'Poulet * Pizza * Salades * Sandwiches',
                note: 2.8,
                products: [{
                        expanded: true,
                        category: 'entre',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                    {
                        category: 'jus',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                    {
                        category: 'resitance',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                ]
            },
            {
                name: '@LLOPIZZA',
                firstImage: '../../assets/img/restaurant/Manotel-Geneve-Restaurants.jpg',
                specialiter: 'Poulet * Pizza * Salades * Sandwiches',
                note: 2.8,
                products: [{
                        expanded: true,
                        category: 'entre',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                    {
                        category: 'jus',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                    {
                        category: 'resitance',
                        plats: [
                            { id: 6, name: 'Ham & Egg', price: '8', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 7, name: 'Basic', price: '5', menutImage: '../../assets/img/restaurant/17840.jpg' },
                            { id: 8, name: 'Ceaser', price: '9', menutImage: '../../assets/img/restaurant/17840.jpg' }
                        ]
                    },
                ]
            },
        ];
        this.cart = [];
    }
    CartService.prototype.getProducts = function () {
        return this.data;
    };
    CartService.prototype.getlistRestaurant = function () {
        return this.listRestaurant;
    };
    CartService.prototype.getCart = function () {
        return this.cart;
    };
    CartService.prototype.addProduct = function (product) {
        this.cart.push(product);
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ })

}]);
//# sourceMappingURL=default~cart-cart-module~detail-restaurant-detail-restaurant-module~restaurants-restaurants-module.js.map