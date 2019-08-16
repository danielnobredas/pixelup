import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CinemaComponent } from './cinema/cinema.component';
import { GamesComponent } from './games/games.component';
import { HqsComponent } from './hqs/hqs.component';
import { SeriesComponent } from './series/series.component';

@NgModule({
  declarations: [
    CinemaComponent,
    GamesComponent,
    HqsComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    CinemaComponent,
    GamesComponent,
    HqsComponent,
    SeriesComponent
  ]
})
export class MediumModule {}
