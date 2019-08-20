import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {EpisodesListComponent} from './episodes-list/episodes-list.component';
import {EpisodeDetailsComponent} from './episode-details/episode-details.component';
import {EpisodeCardComponent} from './episodes-list/episode-card/episode-card.component';

@NgModule({
  declarations: [
    EpisodesListComponent,
    EpisodeDetailsComponent,
    EpisodeCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    EpisodesListComponent,
    EpisodeDetailsComponent
  ]
})
export class PodcastModule {
}
