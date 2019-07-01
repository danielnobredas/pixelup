import { Component, OnInit } from '@angular/core';
import {MediumService} from '../medium.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-hqs',
  templateUrl: './hqs.component.html',
  styleUrls: ['./hqs.component.scss']
})
export class HqsComponent implements OnInit {

  constructor(private mediumService: MediumService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.mediumService.getPostsHQs();
  }

}
