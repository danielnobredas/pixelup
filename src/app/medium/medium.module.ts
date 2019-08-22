import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CinemaComponent} from './cinema/cinema.component';
import {GamesComponent} from './games/games.component';
import {HqsComponent} from './hqs/hqs.component';
import {SeriesComponent} from './series/series.component';

@NgModule({
  declarations: [
    CinemaComponent,
    GamesComponent,
    HqsComponent,
    SeriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CinemaComponent,
    GamesComponent,
    HqsComponent,
    SeriesComponent
  ]
})
export class MediumModule {
}
