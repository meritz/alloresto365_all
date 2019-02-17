import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Restauran',
      url: '/restaurants',
      icon: 'restaurant'
    },
    {
      title: '% Promotions',
      url: '/promo',
      icon: 'megaphone'
    },
    {
      title: 'Votre localisation',
      url: '/home',
      icon: 'pin'
    },
    {
      title: 'Compte',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Commandes',
      url: '/commandes',
      icon: 'pricetags'
    },
    {
      title: 'App Configuration',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Information',
      url: '/info',
      icon: 'information'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
