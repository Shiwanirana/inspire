export default class Name{
  constructor(data){
   this.name= data.name
  }

  get Template(){
    return`
     <h1><b>${this.name}</b></h1>
    `
  }
}