import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MediumService} from '../medium.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor(private mediumService: MediumService, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.mediumService.getPostsSeries();
  }

}
