export default class Todo {
  constructor(data) {
    this.id = data.id;
    this.completed = data.completed
    this.description = data.description
  }

  get Template(){

    
    if (this.completed) {
      return`
      <div class="card bg-dark">
  <div class="row   bg-white text-dark">
    <div class="col-4">
    <input type="checkbox" ${this.completed?"checked":"" } class="form-check-input" name="itemCheck" onclick="app.todoController.toggleTodoStatus('${this.id}')" />
      
      <span><h6 class="text-center mx-0 px-0 "><s>${this.description}</s></h6></span>
      <button onclick="app.todoController.removeTodo('${this.id}')" class="btn btn-danger"><i class="fas fa-trash"></i></button>
    </div>
</div>
</div>
    `
    } else {
      return `
      <div class="card bg-dark">
  <div class="row  bg-light text-dark">
    <div class="col-4">
    <input type="checkbox" ${this.completed?"checked":"" } class="form-check-input" name="itemCheck" onclick="app.todoController.toggleTodoStatus('${this.id}')" />
      
      <span><h6 class="text-center">${this.description}</h6></span>
      <button onclick="app.todoController.removeTodo('${this.id}')" class="btn btn-danger"><i class="fas fa-trash"></i></button>
    </div>
</div>
</div>
    `
    }
  }
}