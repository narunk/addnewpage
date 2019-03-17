import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Menu02Page } from '../pages/menu02/menu02';
import { Menu01Page } from '../pages/menu01/menu01';
import { Menu03Page } from '../pages/menu03/menu03';
import {SlidesPage} from '../pages/slides/slides';
import { CustomerProvider } from '../providers/customer/customer';
import { CustomerdetailPage } from '../pages/customerdetail/customerdetail';
//import{CustomersPage}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Menu01Page,
    Menu02Page,
    Menu03Page,
    SlidesPage,
    CustomerdetailPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Menu01Page,
    Menu02Page,
    Menu03Page,
    SlidesPage,
    CustomerdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerProvider
  ]
})
export class AppModule {}
