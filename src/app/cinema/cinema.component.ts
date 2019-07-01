import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  posts;

  constructor() {
  }

  ngOnInit() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/portalpixelup/tagged/cinema')
      .then((res) => res.json())
      .then((data) => {
        // Filter the array
        const res = data.items; // This is an array with the content. No feed, no info about author etc..
        this.posts = res.filter(item => item.categories.length > 0); // That's the main trick* !
        console.log(this.posts);

        return this.posts;
      });
  }

}
