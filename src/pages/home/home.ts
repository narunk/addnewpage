import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{Menu02Page} from '../menu02/menu02';
import{Menu01Page} from '../menu01/menu01';
import{Menu03Page} from '../menu03/menu03';
import {SlidesPage} from '../slides/slides';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoMenu02(){
    this.navCtrl.push(Menu02Page);
  //ทำลิงค์ไปยังหน้าเมนูอื่นนอกจาก HOME
}
  gotoMenu01(){
    this.navCtrl.push(Menu01Page);
  //หน้านี้จะใช้เรียกข้อมูลจาก Provider
  }
  gotoMenu03(){
    this.navCtrl.push(Menu03Page);

  }
  gotoSlide(){
    this.navCtrl.push(SlidesPage);
  //สร้าง imags Slides
  }

}
