/* tslint:disable:member-ordering */
import {Component, OnInit} from '@angular/core';
import {PodcastService} from '../podcast/podcast.service';
import {MediumService} from '../medium/medium.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Episode} from '../podcast/episode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  episodes: Episode[] = [];

  constructor(
    public domSanitizer: DomSanitizer,
    public mediumService: MediumService,
    public podcastService: PodcastService) {
  }

  ngOnInit() {
    this.mediumService.getLatetsPosts();
    this.podcastService.getLastEpisode()
      .subscribe(data => {
        this.episodes = data['collection'];
        console.log(this.episodes = data['collection']);
      });
  }

}
