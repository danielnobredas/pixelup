import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PodcastService} from '../podcast.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {

  @Output() recentEpisode = new EventEmitter();

  episodeList: any = [];

  constructor(private podcastService: PodcastService,
              private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.podcastService.getEpisodes()
      .subscribe(data => {
        this.episodeList = data['collection'];
        console.log(this.episodeList = data['collection']);
        this.episodeList.forEach(episode => {
          if (episode.published_at) {
            this.podcastService.getEpisodeDownload(episode.analytics.href)
              .subscribe(datas => {
                Object.assign(episode, {downloads: datas['total']});
              });
          }
        });
        this.recentEpisode.emit(this.episodeList[0]);
      });
  }

  checkEpisode(episode) {
    return episode.published_at !== undefined;
  }
}
