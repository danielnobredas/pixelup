import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {SafePipeModule} from 'safe-pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {ErrorsModule} from './errors/errors.module';
import {MediumModule} from './medium/medium.module';
import {PodcastModule} from './podcast/podcast.module';

import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AboutComponent} from './about/about.component';
import {FooterComponent} from './footer/footer.component';
import {AppService} from './app.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SafePipeModule,
    NgbModule,
    SwiperModule,
    MediumModule,
    PodcastModule,
    ErrorsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
