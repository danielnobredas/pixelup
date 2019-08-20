import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {PodcastListComponent} from './podcast-list/podcast-list.component';
import {PodcastDetailsComponent} from './podcast-details/podcast-details.component';

@NgModule({
  declarations: [
    PodcastListComponent,
    PodcastDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    PodcastListComponent,
    PodcastDetailsComponent
  ]
})
export class PodcastModule {
}
