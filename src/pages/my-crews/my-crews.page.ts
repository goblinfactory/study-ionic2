import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments.page';

@Component({
  selector: 'page-my-crews',
  templateUrl: 'my-crews.page.html'
})
export class MyCrewsPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad (pagename)Page');
  }

  findATournament() {
   this.nav.push(TournamentsPage);
  }
}
