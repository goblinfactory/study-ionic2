import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamDetailsPage } from '../team-details/team-details.page';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.page.html'
})
export class TeamsPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad (pagename)Page');
  }

  itemTapped() {
    this.nav.push(TeamDetailsPage);
  }


}
