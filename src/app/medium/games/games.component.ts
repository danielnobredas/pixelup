import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MediumService } from '../medium.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(public mediumService: MediumService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.mediumService.getPostsGames();
  }

}
