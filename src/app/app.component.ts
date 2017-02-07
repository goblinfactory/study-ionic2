import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { Test1Page } from '../pages/test1/test1.page';
import { MyTeamsPage } from '../pages/my-teams/my-teams.page';
import { TournamentsPage } from '../pages/tournaments/tournaments.page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  startPage: any = MyTeamsPage;

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
    this.nav.push(MyTeamsPage);
  }

  goToTournaments() {
    this.nav.push(TournamentsPage);
  }

}
