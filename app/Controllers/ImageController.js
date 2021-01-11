
//TODO Create methods for constructor, and rendering the image to the page

import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js"

//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
function _drawImage(){
  document.body.style.backgroundImage = `url(${ProxyState.image.url})`
}
export default class ImageController {
  constructor(){
    ProxyState.on("image",_drawImage)
    this.getImage()
  }
  getImage(){
    try{
      imageService.getImage()
    }catch (error){
      console.error(error)
    }
  }
 }