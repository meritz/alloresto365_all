import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.page.html',
  styleUrls: ['./payement.page.scss'],
})
export class PayementPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    
  }

  confirmation(){
    this.navCtrl.navigateForward(['thank-page']);
  }

}
