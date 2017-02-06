import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {TeamDetailsPage, StandingsPage } from '../pages';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.page.html'
})

export class TeamHomePage {

tabDetails : any
tabStandings : any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabDetails = TeamDetailsPage
    this.tabStandings = StandingsPage
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad team-home Page');
  }

}
