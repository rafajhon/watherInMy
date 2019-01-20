import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCurrentComponent } from './weather-current.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeatherCurrentComponent, WeatherComponent]
})
export class WeatherCurrentModule { }
