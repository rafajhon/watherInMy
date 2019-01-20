export class WeatherModel {
    public base: string;
    public id : number;
    public name: string;
    public cod: number;

    public main : {
        temp: number,
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number
    };

    public wind: {
        speed: number,
        deg: number
    };
} 