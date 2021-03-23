import {itemPriceModel} from '../model/itemPriceModel.js'
import {itemPriceView} from '../view/itemPriceView.js'

let itemPriceController = {
    init : function(price)
    {
        itemPriceModel.init(price);
        return itemPriceView.init();
    },
    getItemPrice : function()
    {
        return itemPriceModel.price;
    }
}

export {itemPriceController};