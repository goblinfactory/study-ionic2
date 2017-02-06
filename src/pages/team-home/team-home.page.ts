import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {TeamDetailsPage, StandingsPage } from '../pages';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.page.html'
})

export class TeamHomePage {

team : { id:number, name:string }
tabDetails : any
tabStandings : any

  constructor(public nav: NavController, public navParams: NavParams) {
    this.tabDetails = TeamDetailsPage
    this.tabStandings = StandingsPage
    this.team = navParams.data
}

  goHome() {
    this.nav.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad team-home Page');
  }

}
