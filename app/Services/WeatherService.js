import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
    console.log(res.data)
  }



  convertTemp() {
    ProxyState.weather.currentTemp = ProxyState.weather.convertTemp(ProxyState.weather.currentTemp.temp)
    ProxyState.weather = ProxyState.weather
    console.log(ProxyState.weather.currentTemp.temp)
  }
}

const weatherService = new WeatherService();
export default weatherService;