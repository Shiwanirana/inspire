import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function _drawWeather() {
  let weather = ProxyState.weather
  document.getElementById("weather").innerHTML= weather.Template
  console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
}


export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    this.getWeather()
    // this.showTime()
  }

  // setInterval(showTime, 1000); 
  //           showTime() { 
  //           let time = new Date(); 
  //           let hour = time.getHours(); 
  //           let min = time.getMinutes(); 
  //           let sec = time.getSeconds(); 
  //           am_pm = "AM"; 
  
  //           if (hour > 12) { 
  //               hour -= 12; 
  //               am_pm = "PM"; 
  //           } 
  //           if (hour == 0) { 
  //               hr = 12; 
  //               am_pm = "AM"; 
  //           } 
  
  //           hour = hour < 10 ? "0" + hour : hour; 
  //           min = min < 10 ? "0" + min : min; 
  //           sec = sec < 10 ? "0" + sec : sec; 
  
  //           let currentTime = hour + ":"  
  //               + min + ":" + sec + am_pm; 
  
  //           document.getElementById("clock") 
  //               .innerHTML = currentTime; 
  //       } 
  
  //       showTime(); 
  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (error) {
      console.error(error)
    }
  }

  convertTemp() {
    weatherService.convertTemp()
  }
}
