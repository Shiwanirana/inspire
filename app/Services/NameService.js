import { ProxyState } from "../AppState.js"
import Name from "../Models/Name.js"
import { saveState } from "../Utils/LocalStorage.js"

class NameService{

  addName(newName){
    let names = new Name(newName)
    ProxyState.name.push(names)
    console.log(ProxyState.name)
  }
  constructor(){
    console.log("save name")
   ProxyState.on("name", saveState)
  }
}
export const nameService = new NameService()