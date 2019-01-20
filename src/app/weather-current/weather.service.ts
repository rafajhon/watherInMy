import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { WeatherModel } from './model/WeatherModel';

@Injectable()
export class WeatherService {

    private _toke = 'a3ca061cefe3e61bae4dd029c8cff51b';

    private _url = 'http://api.openweathermap.org/data/2.5/weather?q=';

  
  constructor(private _http: Http) { }

  getUrl(city: string){
    return this._url + city + ',&APPID=' + this._toke;
  }


  searchWeather(city: string): Observable<WeatherModel> {
    return this._http.get(this.getUrl(city))
        .map(response => <WeatherModel>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
}

private handleError(error: Response) {
    return Observable.throw(error.json() || 'Server error');
}

}
