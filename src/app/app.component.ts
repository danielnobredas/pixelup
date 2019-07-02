import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [':host { display: block; }']
})
export class AppComponent {
  constructor(private router: Router, private appService: AppService) {

  }
}
