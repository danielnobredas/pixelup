import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

// Define API
const apiURL = 'https://api.simplecast.com/';
const auth_token = 'eyJhcGlfa2V5IjoiYWIwMDI3NDMzZDUyMzNmYWFhMTcwZjI4ZDBjNjY2ODIifQ==';
const podcast_id = '4385c37e-4e30-4b72-a071-2833267bacaa';

@Injectable({ providedIn: 'root'})
export class PodcastService {
  episodes = [];

  constructor(private http: HttpClient) {
  }

  /*========================================
  CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
  }

  // HttpClient API get() method => Fetch episodes list
  getEpisodes() {
    return this.http
      .get<Object[]>(apiURL + 'podcasts/' + podcast_id + '/episodes?limit=12', {headers: this.getHeaders()});
  }

  getLatestEpisodes() {
    return this.http
      .get<Object[]>(apiURL + 'podcasts/' + podcast_id + '/episodes?limit=5', {headers: this.getHeaders()})
      .subscribe(data => {
        this.episodes = data['collection'];
      });
  }

  // HttpClient API get() method => Fetch episode
  getEpisode(episode_id: string) {
    return this.http
      .get<Object[]>(apiURL + 'episodes/' + episode_id, {headers: this.getHeaders()});
  }

}
