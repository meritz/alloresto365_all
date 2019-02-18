import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { DetailRestaurantPage } from '../detail-restaurant/detail-restaurant.page';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  images = ['2.jpg',
            '2.jpg',
            '2.jpg',
            '2.jpg',
            '2.jpg',
            '2.jpg',
            '2.jpg',
           ];
  slideOpts = {
    effect: 'flip'
  };

  cart = [];
  items = [];
  listRestaurant = [];

  sliderConfig = {
    slidesPerView: 1.18,
    spaceBetween: 3,
    centeredSlides: true
  };

  constructor(public navCtrl: NavController, public cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.items = this.cartService.getProducts();
    console.log(this.cartService.getProducts());
    this.listRestaurant = this.cartService.getlistRestaurant();
    this.cart = this.cartService.getCart();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

  openCart() {
    this.router.navigate(['cart']);
  }

  async opendetail(restau: any) {
    this.navCtrl.navigateForward(['detail-restaurant']);
    this.cartService.getlistRestaurant = restau;
  }
}
