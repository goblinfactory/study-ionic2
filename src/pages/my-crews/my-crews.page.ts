import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompetitionsPage } from '../pages';

@Component({
  selector: 'page-my-crews',
  templateUrl: 'my-crews.page.html'
})
export class MyCrewsPage {

  constructor(public nav: NavController, public navParams: NavParams) {}


  findACompetition() {
   this.nav.push(CompetitionsPage);
  }
  // LELU did leave, will did enter, will did load, will did unload 

  ionViewDidLoad(){
    console.log('Did load')
  }

  ionViewWillEnter(){
    console.log('Will enter')
  }
  ionViewDidEnter(){
    console.log('Did enter')
  }

  ionViewWillLeave(){
        console.log('will leave')
  }
  ionViewDidLeave(){
        console.log('Did leave')
  }

  ionViewWillUnload(){
        console.log('will unload')
  }

  ionViewDidUnload(){
        console.log('Did unload')
  }

}
