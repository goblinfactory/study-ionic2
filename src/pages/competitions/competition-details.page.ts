import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-competition-details',
  templateUrl: 'competition-details.page.html'
})

            

export class CompetitionDetailsPage {

  _racedata  =  {
                "University Boat Race": {
                    "races": [
                        {"year":2016, "race":"Mens", "id":1234, "between":"Cambridge", "and":"Oxford", "winner":"Cambridge", "time":"18m41s", "location":"River Thames Tideway"},
                        {"year":2016, "race":"Women", "id":1235, "between":"Cambridge", "and":"Oxford", "winner":"Oxford", "time":"21m49s", "location":"River Thames Tideway"}
                    ]
                }
            };


  competition: any;
  id : string;
  races : any;
  
  // hard code for now, inject later

  constructor(public nav: NavController, public navParams: NavParams) {
    this.competition = navParams.data;
    this.id = this.competition.id;
    this.races = this._racedata["University Boat Race"].races;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad (pagename)Page');
  }

}
