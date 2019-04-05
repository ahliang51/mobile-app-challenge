import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OffApplicationPage } from '../../pages/off-application/off-application';

/**
 * Generated class for the HomeOperatorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-operator',
  templateUrl: 'home-operator.html'
})
export class HomeOperatorComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello HomeOperatorComponent Component');
    this.text = 'Hello World';
  }

  offApplication() {
    this.navCtrl.push(OffApplicationPage)
  }

}
