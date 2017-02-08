import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { LegalPage, TeamsPage,StandingsPage, TeamDetailsPage, CompetitionsPage,CompetitionDetailsPage, MyCrewsPage, TeamHomePage }   from '../pages/pages';


@NgModule({
  declarations: [
    MyApp,
    CompetitionsPage,
    CompetitionDetailsPage,
    MyCrewsPage,
    TeamDetailsPage,
    TeamsPage,
    StandingsPage, 
    TeamHomePage,
    LegalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // I think this might wire up factories for these components (pages) i.e. when used with navs?
    MyApp,
    CompetitionsPage,
    CompetitionDetailsPage,
    MyCrewsPage,
    TeamDetailsPage,
    TeamHomePage,
    TeamsPage,
    StandingsPage,
    LegalPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
