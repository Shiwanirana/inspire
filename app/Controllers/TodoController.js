import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() { 
  let template =''
ProxyState.todos.forEach(t=>{
  template += t.Template
})
document.getElementById("todos").innerHTML= template
console.log("drwaw something")
document.getElementById("total-task").innerText= ProxyState.todos.length.toString()

let taskCount = ProxyState.todos.filter(t => t.completed != true)
document.getElementById("complete-task").innerText = taskCount.length.toString()
}

export default class TodoController {
  constructor() {
    console.log("are u working todo controller")
    //TODO Remember to register your subscribers
    ProxyState.on("todos", _drawTodos)
     this.getTodos();
     _drawTodos()
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    console.log("add todo")
    e.preventDefault();
    let form = e.target;
    //TODO build the todo object from the data that comes into this method
    let todo = {
      description: form.description.value};
      form.reset()
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
    
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}