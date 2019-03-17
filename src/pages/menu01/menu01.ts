import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer/customer';
import { CustomerdetailPage } from '../customerdetail/customerdetail';
/**
 * Generated class for the Menu01Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu01',
  templateUrl: 'menu01.html',
})
export class Menu01Page {
 allcutomers:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:CustomerProvider) {
    this.data.loadAll().then(result=>{this.allcutomers=result});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu01Page');
  }
  showCustomer(cusid){
    this.navCtrl.push(CustomerdetailPage, {id:cusid});
  }
}
