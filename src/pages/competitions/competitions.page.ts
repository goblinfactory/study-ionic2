import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RowingApi } from '../../shared/shared'
import { TeamsPage } from '../teams/teams.page';

@Component({
  selector: 'page-competitions',
  templateUrl: 'competitions.page.html'
})
export class CompetitionsPage {

  constructor(public nav: NavController, private api : RowingApi, public navParams: NavParams ) {}

  competitions : any;

  itemTapped($event, competition) {
    this.nav.push(TeamsPage, competition);
  }

  ionViewDidLoad() {
    this.api.getCompetitions().then( data => {
      this.competitions = data;
      console.log(this.competitions);
    });
  }

  doRefresh(refresher) {
        this.api.getCompetitions().then( data => {
      this.competitions = data;
      console.log(this.competitions);
      refresher.complete();
    });
  }
  
}