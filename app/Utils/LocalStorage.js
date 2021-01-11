import { ProxyState } from "../AppState.js";
import Name from "../Models/Name.js";


export function saveState(){
  localStorage.setItem("name", JSON.stringify({name: ProxyState.name}))
}

export function loadState(){
  let data = JSON.parse(localStorage.getItem("name"))
  if(data){
    console.log(data, "data1")
   ProxyState.name = data.name.map (n => new Name(n))
   
  
  //  this.listItems = data.listItems.map(i=> new List(i))
  //  console.log(data, "data2")

  }

}