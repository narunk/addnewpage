import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{Menu02Page} from '../menu02/menu02';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoMenu02(){
    this.navCtrl.push(Menu02Page);

  }

}
