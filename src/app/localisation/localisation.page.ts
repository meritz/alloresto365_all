import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.page.html',
  styleUrls: ['./localisation.page.scss'],
})
export class LocalisationPage implements OnInit {

  constructor(public navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  openrestaurent() {
    this.router.navigate(['restaurants']);
  }

}
