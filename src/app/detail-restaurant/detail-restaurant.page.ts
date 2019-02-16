import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.page.html',
  styleUrls: ['./detail-restaurant.page.scss'],
})
export class DetailRestaurantPage implements OnInit {

  restau;
  cart = [];
  items = [];

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(public cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.restau = this.cartService.getlistRestaurant;
    console.log(this.cartService.getlistRestaurant);
    this.cart = this.cartService.getCart();
  }

  openCart() {
    this.router.navigate(['cart']);
  }

  addToCart(plat) {
    this.cartService.addProduct(plat);
  }

}
