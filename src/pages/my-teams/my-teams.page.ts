import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TournamentsPage } from '../tournaments/tournaments.page';

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad (pagename)Page');
  }

  findATournament() {
   this.nav.push(TournamentsPage);
  }
}
