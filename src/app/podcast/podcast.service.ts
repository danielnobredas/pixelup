import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  // Define API
  apiURL = 'https://api.simplecast.com/';
  private auth_token = 'eyJhcGlfa2V5IjoiYWIwMDI3NDMzZDUyMzNmYWFhMTcwZjI4ZDBjNjY2ODIifQ==';
  private podcast_id = '4385c37e-4e30-4b72-a071-2833267bacaa';

  constructor(private http: HttpClient) {
  }

  /*========================================
  CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  private getHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.auth_token
    });
    return headers;
  }

  // HttpClient API get() method => Fetch episodes list
  getEpisodes() {
    return this.http
      .get(this.apiURL + '/podcasts/' + this.podcast_id + '/episodes?limit=30', {headers: this.getHeaders()});
  }

  // HttpClient API get() method => Fetch episode
  getEpisode(slug) {
    return this.http
      .get(this.apiURL + '/episodes/' + slug, {headers: this.getHeaders()});
  }

  getEpisodeDownload(link) {
    return this.http
      .get(link, {headers: this.getHeaders()});
  }
}
