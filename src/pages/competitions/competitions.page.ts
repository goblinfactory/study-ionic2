import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamsPage } from '../teams/teams.page';

@Component({
  selector: 'page-competitions',
  templateUrl: 'competitions.page.html'
})
export class CompetitionsPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  itemTapped() {
    this.nav.push(TeamsPage);
  }

  ionViewDidLoad() {
    
  }

}
