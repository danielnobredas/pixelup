import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutWithoutSidenavComponent } from './layout/layout-without-sidenav/layout-without-sidenav.component';
import { HomeComponent } from './home/home.component';
import { PodcastListComponent } from './podcast/podcast-list/podcast-list.component';
import { PodcastDetailsComponent } from './podcast/podcast-details/podcast-details.component';
import { CinemaComponent } from './cinema/cinema.component';


const routes: Routes = [
  { path: '', component: LayoutWithoutSidenavComponent, pathMatch: 'full', children: [
      { path: '', component: HomeComponent },
    ]
  },
  { path: 'podcast', component: LayoutWithoutSidenavComponent, children: [
      { path: '', component: PodcastListComponent },
      { path: 'podcast/:slug', component: PodcastDetailsComponent}
    ]
  },
  { path: 'cinema', component: LayoutWithoutSidenavComponent, children: [
      { path: '', component: CinemaComponent },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
