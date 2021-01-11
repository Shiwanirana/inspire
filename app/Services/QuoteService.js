import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import  Quote  from "../Models/Quote.js";

//TODO create methods to retrieve data and update the State
class QuoteService { 
  async getQuote(){
    let res = await api.get('quotes')
    ProxyState.quote = new Quote(res.data)
    console.log(ProxyState.quote)
  }
   show(id){
     console.log("are u toggling the quote")
    // document.getElementById('quote-1').classList.remove('hidden')
    document.getElementById(id).style.visibility = "visible"
  }
  hide(id){
    console.log("are u toggling the quote hide")
  //  document.getElementById('quote-1').classList.add('hidden')
  document.getElementById(id).style.visibility = "hidden"
 }
  
}

 export const quoteService = new QuoteService();
// export default quoteService;