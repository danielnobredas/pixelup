import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastListComponent } from './podcast/podcast-list/podcast-list.component';
import { PodcastDetailsComponent } from './podcast/podcast-details/podcast-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AppService } from './app.service';
import { CinemaComponent } from './medium/cinema/cinema.component';
import { SafePipeModule } from 'safe-pipe';
import { MediumComponent } from './medium/medium.component';
import { SeriesComponent } from './medium/series/series.component';
import { GamesComponent } from './medium/games/games.component';
import { HqsComponent } from './medium/hqs/hqs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PodcastComponent,
    PodcastListComponent,
    PodcastDetailsComponent,
    CinemaComponent,
    MediumComponent,
    SeriesComponent,
    GamesComponent,
    HqsComponent,
    NavbarComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SafePipeModule,
    NgbModule
  ],
  providers: [
          { provide: LOCALE_ID, useValue: 'pt' },
    AppService
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
