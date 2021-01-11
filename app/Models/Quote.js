export default class Quote {
constructor(data){
  this.id= data.id
  this.author= data.quote.author
  this.body = data.quote.body
}

get Template(){
  return `
  <p class="quote" onmouseover="app.quoteController.show('quote-1')" onmouseout="app.quoteController.hide('quote-1')">${this.body}</p>
  
  `
}
get Author(){
  return`
  <p class="">${this.author}</p>
  `
}
}