import { Component, Injectable, Pipe } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RowingApi } from '../../shared/shared'

@Component({
  selector: 'page-competition-details',
  templateUrl: 'competition-details.page.html'
})

@Pipe({ name: 'derp' })
export class DerpPipe {
  transform (value, args) {
    return Array.from(value);
  }
}
            
@Injectable()            
export class CompetitionDetailsPage {

  // races filtered by sex or null
  racesBySex : any;
  competition: any;
  id : string;
  sex : any;
_races : any;

  constructor(public nav: NavController, private api : RowingApi, public navParams: NavParams) {
    console.log('constructor');
    this.competition = navParams.data;
    this.id = this.competition.id;
    this.sex = "Mens";
    
    // unwrap promise
    this.api.getRaces(this.id).then( res => {
      this._races = res;
      console.log("params",{ competition:this.competition, id: this.id, sex:this.sex, races:this._races });
      this.racesBySex = this._races[this.sex];
      console.log('racesBySex',this.racesBySex);
    });

    // at this point we're waiting for data to come back
  }

  ionViewDidLoad() {
    console.log('did load');
  }

  changeSex() {
    this.racesBySex = this._races[this.sex];
  }
}


