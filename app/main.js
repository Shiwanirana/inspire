import ClockController from "./Controllers/ClockController.js";
import ImageController from "./Controllers/ImageController.js";
import NameController from "./Controllers/NameController.js";
import QuoteController from "./Controllers/QuoteController.js";
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";
import { loadState } from "./Utils/LocalStorage.js";


//TODO Dont forget to register all your controllers	
class App {
  constructor() {
    this.nameController = new NameController();
    this.clockController = new ClockController();
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.imageController = new ImageController();
    this.quoteController = new QuoteController();
  }
}


window["app"] = new App();
loadState()