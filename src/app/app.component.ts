import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HttpModule } from '@angular/http';

import { MyCrewsPage, CompetitionsPage, LegalPage } from '../pages/pages';
import { RowingApi } from '../shared/shared'

@Component({
  templateUrl: 'app.html',
  providers: [
    RowingApi,
    HttpModule
  ]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  startPage: any = MyCrewsPage;

  constructor( 
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  // this is bound to the ngFor on the button inside the first ion-list
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  goHome() {
    this.nav.popToRoot();
    this.nav.push(MyCrewsPage);
  }

  goToTournaments() {
    this.nav.push(CompetitionsPage);
  }

  goToLegal() {
    this.nav.push(LegalPage);
  }

}
