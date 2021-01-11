import { ProxyState } from "../AppState.js";
import {nameService} from "../Services/NameService.js"

function _drawName(){
 let template=''
 ProxyState.name.forEach(n=>{
   template += n.Template
 })
 document.getElementById("name-here").innerHTML= template
 console.log("drawName")
}

export default class NameController{
  constructor(){
    ProxyState.on("name", _drawName)
    _drawName()
    console.log("name here hello")
  }

addName(e){
  console.log("name please")
  e.preventDefault();
  let form = e.target;
  let name = {
    name: form.name.value
  }
   nameService.addName(name)
   form.reset()
   _drawName()
}
}