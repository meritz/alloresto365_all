import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  lang: any;
  enableNotifications: any;
  paymentMethod: any;
  currency: any;
  enablePromo: any;
  enableHistory: any;

  languages: any = ['French', 'English'];
  paymentMethods: any = ['Paypal', 'Credit Card', 'cash'];
  currencies: any = ['XOF', 'EUR'];

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  editProfile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }

}
