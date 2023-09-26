import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '4aEoif4IiSbXLP81krxfAjbsz0KIHBPZ';
  private city = 'kiskunhalas';
  private apiUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${this.city}&apikey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get(this.apiUrl);
  }
}
