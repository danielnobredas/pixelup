import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastDetailsComponent } from './podcast/podcast-details/podcast-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { page: '' }
  },
  {
    path: 'podcast',
    component: PodcastComponent,
    data: { page: 'podcast' }
  },
  {
    path: 'podcast/:slug',
    component: PodcastDetailsComponent,
    data: { page: 'podcast' }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
