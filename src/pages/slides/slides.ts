import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  slides=[
    {id:"1", name:"catimag1", image:"cat01.jpg" , alta:"แมวขาว"},
    {id:"2", name:"catimag2", image:"cat02.jpg" , alta:"แมวน้อย"},
    {id:"3", name:"catimag3", image:"cat03.jpg" , alta:"แมวฉงน"},
    {id:"4", name:"catimag4", image:"cat04.jpg" , alta:"แมวลาย"}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}
