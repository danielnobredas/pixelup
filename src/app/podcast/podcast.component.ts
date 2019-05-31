import { Component, OnInit } from '@angular/core';
import { PodcastService } from './podcast.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {
  episode;

  constructor() {}

  ngOnInit() {
  }

  recentEpisode(event) {
    this.episode = event;
  }


}
