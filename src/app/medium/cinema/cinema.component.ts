import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MediumService } from '../medium.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  constructor(private mediumService: MediumService, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.mediumService.getPostsCinema();
  }

}
