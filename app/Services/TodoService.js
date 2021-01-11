import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js"
import { api } from "../Services/AxiosService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'shiwani/todos/'


class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    ProxyState.todos = res.data.map(t=> new Todo(t))
    //TODO Handle this response from the server
    console.log(ProxyState.todos)
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    //TODO Handle this response from the server
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    console.log(res.data)
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(t => t.id == todoId);
    (todo.completed) ? todo.completed = false : todo.completed = true
    let res = await api.put(url+todoId, todo);
    let index = await ProxyState.todos.findIndex(t => t.id == todoId)
    ProxyState.todos[index] = todo
    ProxyState.todos = ProxyState.todos
    // console.log(res);
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
     let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    let res = await api.delete(url + todoId, todo);
    ProxyState.todos = ProxyState.todos.filter(t=> t.id != todoId)
  }
}

const todoService = new TodoService();
export default todoService;