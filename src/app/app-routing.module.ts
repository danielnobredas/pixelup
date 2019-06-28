import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastDetailsComponent } from './podcast/podcast-details/podcast-details.component';

import { LayoutWithoutSidenavComponent } from './layout/layout-without-sidenav/layout-without-sidenav.component';


const routes: Routes = [
  { path: '', component: LayoutWithoutSidenavComponent, pathMatch: 'full', children: [
      { path: '', component: HomeComponent },
    ]},

  { path: 'podcast', component: LayoutWithoutSidenavComponent, children: [
      { path: '', component: PodcastComponent },
      { path: 'podcast/:slug', component: PodcastDetailsComponent}
    ]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
