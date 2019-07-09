import {Component, OnInit} from '@angular/core';
import {PodcastService} from '../podcast/podcast.service';
import {MediumService} from '../medium/medium.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private domSanitizer: DomSanitizer,
    public mediumService: MediumService,
    private podcastService: PodcastService) {
  }

  ngOnInit() {
    this.mediumService.getLatetsPosts();
    this.podcastService.getLatestEpisodes();
  }

}
