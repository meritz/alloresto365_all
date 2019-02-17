import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-thank-page',
  templateUrl: './thank-page.page.html',
  styleUrls: ['./thank-page.page.scss'],
})
export class ThankPagePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  backHome() {
    this.navCtrl.navigateForward(['restaurants']);
  }

}
