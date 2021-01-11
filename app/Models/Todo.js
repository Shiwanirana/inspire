export default class Todo {
  constructor(data) {
    this.id = data.id;
    this.completed = data.completed
    this.description = data.description
  }

  get Template(){

    
    if (this.completed) {
      return /*html*/ `
  <div class="row  mb-2 bg-dark text-light">
    <div class="col-2">
      <button onclick="app.todoController.toggleTodoStatus('${this.id}')" class="btn btn-success"><i class="fas fa-check-square"></i></button>
    </div>
    <div class="col-8">
      <h6 class="strikeThrough text-center "><s>${this.description}</s></h6>
    </div>
    <div class="col-2">
      <button onclick="app.todoController.removeTodo('${this.id}')" class="btn btn-danger"><i class="fas fa-trash"></i></button>
    </div>
</div>
    `
    } else {
      return /*html*/ `
  <div class="row mb-2 bg-dark text-light">
    <div class="col-2">
      <button onclick="app.todoController.toggleTodoStatus('${this.id}')" class="btn btn-success"><i class="fas fa-square"></i></button>
    </div>
    <div class="col-8">
      <h6 class="text-center">${this.description}</h6>
    </div>
    <div class="col-2">
      <button onclick="app.todoController.removeTodo('${this.id}')" class="btn btn-danger"><i class="fas fa-minus-circle"></i></button>
    </div>
</div>
    `
    }
  }
}