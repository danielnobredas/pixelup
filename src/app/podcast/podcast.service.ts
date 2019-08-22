import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Episode} from './episode';
import {EpisodeDetail} from './episodeDetail';

// Define API
const apiURL = 'https://api.simplecast.com/';
const auth_token = 'eyJhcGlfa2V5IjoiYWIwMDI3NDMzZDUyMzNmYWFhMTcwZjI4ZDBjNjY2ODIifQ==';
const podcast_id = '4385c37e-4e30-4b72-a071-2833267bacaa';

@Injectable({ providedIn: 'root'})
export class PodcastService {

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
      .get<Episode[]>(apiURL + 'podcasts/' + podcast_id + '/episodes?limit=100', {headers: this.getHeaders()});
  }

  getLatestEpisodes() {
    return this.http
      .get<Episode[]>(apiURL + 'podcasts/' + podcast_id + '/episodes?limit=5', {headers: this.getHeaders()});
  }

  getLastEpisode() {
    return this.http
      .get<Episode[]>(apiURL + 'podcasts/' + podcast_id + '/episodes?limit=1', {headers: this.getHeaders()});
  }

  // HttpClient API get() method => Fetch episode
  getEpisode(episode_id: string) {
    return this.http
      .get<EpisodeDetail[]>(apiURL + 'episodes/' + episode_id, {headers: this.getHeaders()});
  }

}
