import {Component, OnInit} from '@angular/core';
import {PodcastService} from '../podcast.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})

export class EpisodeDetailsComponent implements OnInit {

  episode: Object[] = [];

  constructor(private podcastService: PodcastService,
              private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const episode_id = this.activatedRoute.snapshot.params.episode_id;

    this.podcastService.getEpisode(episode_id)
      .subscribe(data => {
        this.episode = data;
        console.log(this.episode = data);
      });
  }

}
