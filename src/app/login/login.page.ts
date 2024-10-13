import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private navCtrl: NavController) {}

  login() {
    console.log('Iniciando sesión...');
    this.navCtrl.navigateForward('/home');
  }
}
