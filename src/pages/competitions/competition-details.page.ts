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
  sex : any;
  
  // hard code for now, inject later

  constructor(public nav: NavController, public navParams: NavParams) {
    console.log(`constructor called...`)
    this.competition = navParams.data;
    this.id = this.competition.id;
    this.sex = "Mens";
    this._filterBySex();
  }

  _filterBySex() {
    this.races = this._racedata["University Boat Race"].races.filter( r=> r.race ==this.sex);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad (pagename)Page');
  }

  changeSex() {
    console.log("sex changed ", this.sex);
    this._filterBySex();
  }
}
