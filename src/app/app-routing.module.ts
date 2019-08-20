import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PodcastListComponent} from './podcast/podcast-list/podcast-list.component';
import {PodcastDetailsComponent} from './podcast/podcast-details/podcast-details.component';
import {CinemaComponent} from './medium/cinema/cinema.component';
import {SeriesComponent} from './medium/series/series.component';
import {GamesComponent} from './medium/games/games.component';
import {HqsComponent} from './medium/hqs/hqs.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {
    path: 'podcast', children: [
      {path: '', component: PodcastListComponent},
      {path: ':episode_id', component: PodcastDetailsComponent}
    ]
  },
  {
    path: 'blog', children: [
      {path: 'cinema', component: CinemaComponent},
      {path: 'series', component: SeriesComponent},
      {path: 'games', component: GamesComponent},
      {path: 'hqs', component: HqsComponent},
    ]
  },
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
