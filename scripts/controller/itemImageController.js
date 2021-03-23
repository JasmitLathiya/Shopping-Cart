import {itemImageModel} from '../model/itemImageModel.js'
import {itemImageView} from '../view/itemImageView.js'

let itemImageController = {
    init : function(src)
    {
        itemImageModel.init(src);
        return itemImageView.init();
    },
    getImageSrc : function()
    {
        return itemImageModel.imageSrc;
    }
}

export {itemImageController};