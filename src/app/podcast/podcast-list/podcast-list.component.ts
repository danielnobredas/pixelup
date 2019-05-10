import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.css']
})
export class PodcastListComponent implements OnInit {

  constructor(private podcastService: PodcastService) {}
  episodeList;

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    this.podcastService.getPodcastList()
    .subscribe(data => {
      this.episodeList = data['collection'];
      this.episodeList.forEach(episode => {
        if (episode.published_at) {
          this.podcastService.getEpisodeDownload(episode.analytics.href)
          .subscribe(datas => {
            Object.assign(episode, { downloads : datas['total']});
          });
        }
      });
    });


    console.log(this.episodeList);
  }
  checkEpisode(episode) {
    return episode.published_at !== undefined;
  }
}
