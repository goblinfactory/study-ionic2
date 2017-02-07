import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { Test1Page }   from '../pages/test1/test1.page';
import { FooterComponent }   from '../components/footer/footer.component';

import { TeamsPage,StandingsPage, TeamDetailsPage, TournamentsPage, MyTeamsPage, TeamHomePage }   from '../pages/pages';




@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    Test1Page,
    FooterComponent,
    TournamentsPage,
    MyTeamsPage,
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
    ItemDetailsPage,
    ListPage,
    Test1Page,
    TournamentsPage,
    MyTeamsPage,
    TeamDetailsPage,
    TeamHomePage,
    TeamsPage,
    StandingsPage
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
