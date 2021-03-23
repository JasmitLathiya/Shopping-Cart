import {itemImageController} from '../controller/itemImageController.js'

let itemImageView = {
    init : function(){
        return this.render();
    },
    render : function()
    {
        this.itemImage = document.createElement("img");
        this.itemImage.className = "itemImage";
        this.itemImage.src = itemImageController.getImageSrc();
        return this.itemImage;
    }
}

export {itemImageView};