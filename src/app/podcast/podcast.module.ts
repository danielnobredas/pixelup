import {NgModule} from '@angular/core';
import {PodcastListComponent} from './podcast-list/podcast-list.component';
import {PodcastDetailsComponent} from './podcast-details/podcast-details.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    PodcastListComponent,
    PodcastDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    PodcastListComponent,
    PodcastDetailsComponent
  ]
})
export class PodcastModule {
}
