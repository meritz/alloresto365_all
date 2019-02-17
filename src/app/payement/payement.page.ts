import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.page.html',
  styleUrls: ['./payement.page.scss'],
})
export class PayementPage implements OnInit {

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,  public loadingCtrl: LoadingController) { }

  ngOnInit() {
    
  }

  async confirmation(){
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: 'la commande est confirmer avec successfully.',
        duration: 3000,
        position: 'bottom'
      });
      this.navCtrl.navigateForward(['thank-page']);
      toast.present();
    });

  }

}
