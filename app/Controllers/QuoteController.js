
//TODO Create methods for constructor, and rendering the quote to the page

import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js"

function _drawQuote(){
  let quote= ProxyState.quote
  document.getElementById("quote").innerHTML = quote.Template
  document.getElementById("quote-1").innerHTML = quote.Author
}
export default class QuoteController {
  constructor(){
    console.log("are you working quote")
    ProxyState.on("quote",_drawQuote)
    this.getQuote()
  }
  getQuote(){
    try{
      quoteService.getQuote()
    }catch(error){
    console.error(error)
  }
  }
  show(id){
    quoteService.show(id)
  }
  hide(id){
    quoteService.hide(id)
  }
 }