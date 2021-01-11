export default class Weather {
  constructor(data) {
    // console.log('[RAW WEATHER API DATA]', data);
   
    // this.time = new Date().toLocaleTimeString("en-US").split(/:| /)
    this.icon = data.weather[0].icon
    this.description = data.weather[0].description
    this.city = data.name
    this.kelvin = (data.main.temp).toFixed(1)
    this.fahrenheit = ((this.kelvin * 9 / 5)- 459.67).toFixed(2)
    this.celsius = (this.kelvin - 273.15).toFixed(2)
    this.windSpeed = data.wind.speed
    
    this.currentTemp = this.convertTemp(this.kelvin)
  }

  convertTemp(currentTemp) {
    let newTemp = null
    let newTempLabel = null
    currentTemp == this.kelvin 
      ? (newTemp = this.fahrenheit) && (newTempLabel = '&#8457;')
      : (currentTemp == this.fahrenheit 
        ? (newTemp = this.celsius) && (newTempLabel = '&#8451;')
        : (currentTemp == this.celsius 
          ? (newTemp = this.kelvin) && (newTempLabel = '&#8490;')
          : (newTemp = this.fahrenheit) && (newTempLabel = '&#8457;')))
          
    return {
      temp: newTemp,
      label: newTempLabel
    }
  }

  get Template() {
    return /*html*/ `

      <div class="weather-section weather-icon mb-0 text-white">
        <img src="https://openweathermap.org/img/w/${this.icon}.png" alt="" id="weatherIcon"><span id="weatherTemp" onclick="app.weatherController.convertTemp('${this.currentTemp.temp}')">${this.currentTemp.temp+this.currentTemp.label}</span>
      <div><small><span>${this.description}--</span></small><i class="fas fa-wind" aria-hidden="true"></i><small><span>    Wind: </span><span id="weatherWSpeed">${this.windSpeed}</span><span>m/s</span></small></div>
          <div><small><span> ${this.city}</span></small></div>
      
          </div>
      
      <!-- <div>${this.time}</div> -->
      <div class="weather-section">
        <div class="compass">
          <i id="arrow" class="fa fa-location-arrow" aria-hidden="true"></i>
        </div>
      </div>
    `;
  }
}