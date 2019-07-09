import {Component, OnInit} from '@angular/core';
import { TEAM } from '../shared/team.constant';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  teamData = TEAM;

  ngOnInit() {
  }

}
