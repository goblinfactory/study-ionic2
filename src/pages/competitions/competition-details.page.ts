import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-competition-details',
  templateUrl: 'competition-details.page.html'
})
export class CompetitionDetailsPage {

  competition: any;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.competition = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad (pagename)Page');
  }

}
