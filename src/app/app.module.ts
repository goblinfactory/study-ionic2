import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';

import { ListPage } from '../pages/list/list';
import { Test1Page }   from '../pages/test1/test1.page';
import { FooterComponent }   from '../components/footer/footer.component';
import { TournamentsPage }   from '../pages/tournaments/tournaments.page';
import { MyTeamsPage }   from '../pages/my-teams/my-teams.page';
import { TeamDetailsPage }   from '../pages/team-details/team-details.page';
import { TeamsPage }   from '../pages/teams/teams.page';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Test1Page,
    FooterComponent,
    TournamentsPage,
    MyTeamsPage,
    TeamDetailsPage,
    TeamsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // I think this might wire up factories for these components (pages) i.e. when used with navs?
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Test1Page,
    TournamentsPage,
    MyTeamsPage,
    TeamDetailsPage,
    TeamsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
