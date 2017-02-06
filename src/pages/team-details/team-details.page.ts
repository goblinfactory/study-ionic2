import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; // NavParams only needed if passing in navigation parameters. 

@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.page.html'
})
export class TeamDetailsPage {

  team : { id:number, name:string }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad (pagename)Page');
  }

}
