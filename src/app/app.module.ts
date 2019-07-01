import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastListComponent } from './podcast/podcast-list/podcast-list.component';
import { PodcastDetailsComponent } from './podcast/podcast-details/podcast-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AppService } from './app.service';
import { CinemaComponent } from './cinema/cinema.component';
import { SafePipeModule } from 'safe-pipe';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PodcastComponent,
    PodcastListComponent,
    PodcastDetailsComponent,
    CinemaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SafePipeModule
  ],
  providers: [
          { provide: LOCALE_ID, useValue: 'pt' },
    AppService
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
