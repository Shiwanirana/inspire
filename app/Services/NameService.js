import { ProxyState } from "../AppState.js"
import Name from "../Models/Name.js"
import { saveState } from "../Utils/LocalStorage.js"

class NameService{

  addName(newName){
    let name = new Name(newName)
    ProxyState.name= name
    console.log(ProxyState.name)
  }
  constructor(){
    console.log("save name")
   ProxyState.on("name", saveState)
  }
}
export const nameService = new NameService()