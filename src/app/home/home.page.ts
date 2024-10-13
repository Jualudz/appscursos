import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  goToRegister() {
    // Lógica para registrarse (puede ser una nueva página o función)
  }
}
