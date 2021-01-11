export default class Clock{
  constructor(data){
    this.dateTime= new Date()
  }
  get Template(){
    return`<h3>Good Morning</h3>`
  }
}