import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PodcastService {


  constructor(private http: HttpClient) {  }

  castUrl = 'https://api.simplecast.com/podcasts/4385c37e-4e30-4b72-a071-2833267bacaa/episodes';
  private auth_token = 'eyJhcGlfa2V5IjoiYWIwMDI3NDMzZDUyMzNmYWFhMTcwZjI4ZDBjNjY2ODIifQ==';

  private getHeaders() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth_token
    });
    return headers;
  }

  getEpisodeDownload(link) {
    return this.http
    .get(link, { headers: this.getHeaders() });
  }

  getPodcastList() {
    return this.http
    .get(this.castUrl, { headers: this.getHeaders() });
  }
}
