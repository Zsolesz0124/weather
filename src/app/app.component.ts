import { Component } from '@angular/core';
import {WeatherService} from "./weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';

  weatherData: any;

  constructor(private weatherService: WeatherService) {
    this.weatherService.getWeather().subscribe((data) => {
      console.log(data);
      this.weatherData = data;
    });
  }

  logooo(){
    console.log("DATAA"+ this.weatherData);
  }

  ngOnInit() {

  }
  /*Az egész kapott json
{
  "data":{
    "time":"2023-09-26T17:09:00Z",
    "values":{
      "cloudBase":null,
      "cloudCeiling":null,
      "cloudCover":1,
      "dewPoint":12.63,
      "freezingRainIntensity":0,
      "humidity":63,
      "precipitationProbability":0,
      "pressureSurfaceLevel":1006.61,
      "rainIntensity":0,
      "sleetIntensity":0,
      "snowIntensity":0,
      "temperature":19.69,
      "temperatureApparent":19.69,
      "uvHealthConcern":0,
      "uvIndex":0,
      "visibility":16,
      "weatherCode":1000,
      "windDirection":49.88,
      "windGust":3.13,
      "windSpeed":2.13
    }
  },
  "location":{
    "lat":46.42784881591797,
    "lon":19.483306884765625,
    "name":"Kiskunhalas, Kiskunhalasi járás, Bács-Kiskun vármegye, Dél-Alföld, Alföld és Észak, Magyarország",
    "type":"administrative"
  }
}*/
}
