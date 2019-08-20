import {Component, Input, OnInit} from '@angular/core';
import {PodcastService} from '../podcast.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['./podcast-details.component.css']
})

export class PodcastDetailsComponent implements OnInit {

  // @Input() episode: PodcastService;
  episode: Object[] = [];

  constructor(private podcastService: PodcastService,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const episode_id = this.activatedRoute.snapshot.params.episode_id;

    this.podcastService.getEpisode(episode_id)
      .subscribe(episode => this.episode = episode);
  }

}
