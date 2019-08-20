import {Component, Input, OnInit} from '@angular/core';
import {PodcastService} from '../podcast.service';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['./podcast-details.component.css']
})

export class PodcastDetailsComponent implements OnInit {

  // @Input() episode: PodcastService;
  episode: Object[] = [];

  constructor(private podcastService: PodcastService) {
    podcastService.getEpisode('magic-the-gathering-ft-top-deck')
      .subscribe(episode => this.episode = episode);
  }

  ngOnInit() {
  }

}
