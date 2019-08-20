import {Component, OnInit} from '@angular/core';

import {PodcastService} from '../podcast.service';
import {Episode} from '../episode';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {

  episodes: Episode[] = [];

  constructor(
    private podcastService: PodcastService,
  ) { }

  ngOnInit() {
    this.podcastService.getEpisodes()
      .subscribe(data => {
        this.episodes = data['collection'];
        console.log(this.episodes = data['collection']);
      });
  }
}
