import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TeamsPage,StandingsPage, TeamDetailsPage, CompetitionsPage, MyCrewsPage, TeamHomePage }   from '../pages/pages';


@NgModule({
  declarations: [
    MyApp,
    CompetitionsPage,
    MyCrewsPage,
    TeamDetailsPage,
    TeamsPage,
    StandingsPage, 
    TeamHomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // I think this might wire up factories for these components (pages) i.e. when used with navs?
    MyApp,
    CompetitionsPage,
    MyCrewsPage,
    TeamDetailsPage,
    TeamHomePage,
    TeamsPage,
    StandingsPage
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
