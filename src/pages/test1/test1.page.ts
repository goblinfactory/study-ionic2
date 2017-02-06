import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {  TournamentsPage } from '../tournaments/tournaments.page';

@Component({
  selector: 'page-test1',
  templateUrl: 'test1.page.html'
})
export class Test1Page {

  constructor(public nav: NavController, public navParams: NavParams) {}

  goToTournaments() {
    console.log('going to the tourney!');
    this.nav.push(TournamentsPage);
  }

  goToSelf() {
    console.log('going to self');
    this.nav.push(Test1Page);
  }

  popMenu() {
    console.log('popping menu');
    this.nav.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad (pagename)Page');
    
  }

}
