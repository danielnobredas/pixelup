import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediumService {
  // Define API
  apiURL = 'https://api.rss2json.com/v1/api.json?rss_url=';
  mediumUrl = 'https://medium.com/feed/portalpixelup/';
  posts;

  constructor(private http: HttpClient) {
  }

  /*========================================
   Methods for consuming Medium Feed API
  =========================================*/

  getLatetsPosts() {
    fetch(this.apiURL + this.mediumUrl)
      .then((res) => res.json())
      .then((data) => {
        // Filter the array
        const res = data.items; // This is an array with the content. No feed, no info about author etc..
        this.posts = res.filter(item => item.categories.length > 0); // That's the main trick* !

        return this.posts;
      });
  }

  getPostsCinema() {
    fetch(this.apiURL + this.mediumUrl + '/tagged/cinema')
      .then((res) => res.json())
      .then((data) => {
        // Filter the array
        const res = data.items; // This is an array with the content. No feed, no info about author etc..
        this.posts = res.filter(item => item.categories.length > 0); // That's the main trick* !

        return this.posts;
      });
  }

  getPostsSeries() {
    fetch(this.apiURL + this.mediumUrl + '/tagged/series')
      .then((res) => res.json())
      .then((data) => {
        // Filter the array
        const res = data.items; // This is an array with the content. No feed, no info about author etc..
        this.posts = res.filter(item => item.categories.length > 0); // That's the main trick* !

        return this.posts;
      });
  }

  getPostsGames() {
    fetch(this.apiURL + this.mediumUrl + '/tagged/games')
      .then((res) => res.json())
      .then((data) => {
        // Filter the array
        const res = data.items; // This is an array with the content. No feed, no info about author etc..
        this.posts = res.filter(item => item.categories.length > 0); // That's the main trick* !

        return this.posts;
      });
  }

  getPostsHQs() {
    fetch(this.apiURL + this.mediumUrl + '/tagged/hqs')
      .then((res) => res.json())
      .then((data) => {
        // Filter the array
        const res = data.items; // This is an array with the content. No feed, no info about author etc..
        this.posts = res.filter(item => item.categories.length > 0); // That's the main trick* !

        return this.posts;
      });
  }

}
