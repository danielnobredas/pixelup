/* tslint:disable:member-ordering */
import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PodcastService} from '../podcast/podcast.service';
import {MediumService} from '../medium/medium.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../vendor/libs/ngx-swiper-wrapper/ngx-swiper-wrapper.scss', 'carousel.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private domSanitizer: DomSanitizer,
    public mediumService: MediumService,
    private podcastService: PodcastService) {
  }

  ngOnInit() {
    this.mediumService.getLatetsPosts();
    this.podcastService.getLatestEpisodes();

  }

  ngAfterViewInit(): void {
    // Trigger resize event to redraw swiper
    setTimeout(() => {
      if (document.createEvent) {
        let event;

        if (typeof document['documentMode'] === 'number' && document['documentMode'] > 10) {
          event = document.createEvent('Event');
          event.initEvent('resize', false, true);
        } else {
          event = new Event('resize');
        }

        window.dispatchEvent(event);
      } else {
        window['fireEvent']('onresize', document['createEventObject']());
      }
    }, 50);
  }

  swiperMultipleSlides = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      loop: true
    }
  };

}
