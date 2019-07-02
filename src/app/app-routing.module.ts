import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PodcastListComponent } from './podcast/podcast-list/podcast-list.component';
import { PodcastDetailsComponent } from './podcast/podcast-details/podcast-details.component';
import { CinemaComponent } from './medium/cinema/cinema.component';
import { SeriesComponent } from './medium/series/series.component';
import { GamesComponent } from './medium/games/games.component';
import { HqsComponent } from './medium/hqs/hqs.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'podcast', component: HomeComponent, children: [
      { path: '', component: PodcastListComponent },
      { path: 'podcast/:slug', component: PodcastDetailsComponent}
    ]
  },
  { path: 'blog', component: HomeComponent, children: [
      { path: 'cinema', component: CinemaComponent },
      { path: 'series', component: SeriesComponent},
      { path: 'games', component: GamesComponent},
      { path: 'hqs', component: HqsComponent},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
