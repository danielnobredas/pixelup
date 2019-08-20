import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Episode} from '../../episode';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnChanges {

  @Input() episodes: Episode[] = [];
  rows: any[] = [];

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.episodes) {
      this.rows = this.groupColumns(this.episodes);
    }
  }

  groupColumns(episodes: Episode[]) {
    const newRows = [];

    for (let index = 0; index < episodes.length; index += 3) {
      newRows.push(episodes.slice(index, index + 3));
    }
    return newRows;
  }

}
