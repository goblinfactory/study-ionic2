import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; // NavParams only needed if passing in navigation parameters. 

@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.page.html'
})
export class TeamDetailsPage {

  @Input()
  team : { id:number, name:string }

  constructor(public nav: NavController, public navParams: NavParams) {
    this.team = navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad (pagename)Page');
  }


}
