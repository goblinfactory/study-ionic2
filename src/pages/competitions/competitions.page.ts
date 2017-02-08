import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RowingApi } from '../../shared/shared'
import { CompetitionDetailsPage } from '../competitions/competition-details.page';
//import { TeamsPage } from '../teams/teams.page';

@Component({
  selector: 'page-competitions',
  templateUrl: 'competitions.page.html'
})
export class CompetitionsPage {

  constructor(public nav: NavController, private api : RowingApi, public navParams: NavParams ) {}

  competitions : any;

  itemTapped($event, competition) {
    //this.nav.push(TeamsPage, competition);
    this.nav.push(CompetitionDetailsPage, competition);
  }

  ionViewDidLoad() {
    // take only the first 6, since we don't yet have arms and icons for the rest
    // simple hack, to keep the demo clean. Otherwise we need an additional property or function (has arms icon)

    this.api.getCompetitions()
      .then( data => {
      this.competitions = data.slice(0,6);
      console.log(this.competitions );
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
