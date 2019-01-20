import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherModel } from '../model/WeatherModel';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {
 
 
  
  weatherModel:WeatherModel;

  city:string ="London,uk";



  constructor(private _weatherService :WeatherService) {
    
  }
  
  ngOnInit(){
    
  }

   searchCurrentWeather() {
    this._weatherService.searchWeather(this.city)
        .subscribe(response => this.weatherModel = response,
        error => this.setError());
  }
  setError(){
    this.weatherModel = null;
  }

}
