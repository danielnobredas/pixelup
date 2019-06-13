import {Component, Input, OnInit} from '@angular/core';
import {PodcastService} from '../podcast.service';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['./podcast-details.component.css']
})
export class PodcastDetailsComponent implements OnInit {

  constructor(private podcastService: PodcastService) {
  }

  @Input() episode: PodcastService;

  ngOnInit() {

  }

}
