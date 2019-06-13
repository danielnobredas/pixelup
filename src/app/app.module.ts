import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastListComponent } from './podcast/podcast-list/podcast-list.component';
import { PodcastDetailsComponent } from './podcast/podcast-details/podcast-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    NavbarComponent,
    PodcastComponent,
    PodcastListComponent,
    PodcastDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
          { provide: LOCALE_ID, useValue: 'pt' }
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
