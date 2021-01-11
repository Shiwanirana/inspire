import {ProxyState} from "../AppState.js";
import Clock from "../Models/Clock.js";

class ClockService {
  constructor() {
    this.getClock();
  }
  getClock(){
    let clock = new Clock()
    ProxyState.on("clock", clock);
  }

  
}

const clockService = new ClockService();
export default clockService;