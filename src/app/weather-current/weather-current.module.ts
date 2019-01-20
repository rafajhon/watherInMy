import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  imports: [
    CommonModule,  FormsModule,
  ],
  providers:[WeatherService],
  exports: [WeatherComponent],
  declarations: [ WeatherComponent]
})
export class WeatherCurrentModule { }
