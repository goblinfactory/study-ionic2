import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';


@Component({
  selector: 'page-teams',
  templateUrl: 'teams.page.html'
})
export class TeamsPage {

teams = [
  { id: 1, name:`Christ's College` },
  { id: 1, name:`Churchill College` },
  { id: 1, name:`Clare College` },
  { id: 1, name:`Clare Hall` },
  { id: 1, name:`Corpus Christi College` },
  { id: 1, name:`Darwin College` },
  { id: 1, name:`Downing College` },
  { id: 1, name:`Emmanuel College` },
  { id: 1, name:`Fitwilliam College` },
  { id: 1, name:`Girton College` },
  { id: 1, name:`Gonville &amp; Caius College` },
  { id: 1, name:`Homerton College` },
  { id: 1, name:`Hughes College` },
  { id: 1, name:`Jesus College` },
  { id: 1, name:`King's College` },
  { id: 1, name:`Lucy Cavendish College` },
  { id: 1, name:`Magdalene College` },
  { id: 1, name:`Murray Edwards College` },
  { id: 1, name:`Newnham College` },
  { id: 1, name:`Pembroke College` },
  { id: 1, name:`Peterhouse College` },
  { id: 1, name:`Queens College` },
  { id: 1, name:`Robinsons College` },
  { id: 1, name:`Selwyn College` },
  { id: 1, name:`Sidney College` },
  { id: 1, name:`St Catharine's College` },
  { id: 1, name:`St Edmund's College` },
  { id: 1, name:`St John's College` },
  { id: 1, name:`Trinity College` },
  { id: 1, name:`Trinity Hall` },
  { id: 1, name:`Wolfson College` }
];

  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad (pagename)Page');
  }

  itemTapped(team) {
    console.log(team)
    this.nav.push(TeamHomePage, team);
  }


}
