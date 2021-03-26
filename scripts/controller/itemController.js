import {itemView} from '../view/itemView.js'
import {itemModel} from '../model/itemModel.js'

const itemController = {
    init : function(data)
    {
        itemModel.init(data);
        return itemView.init();
    },
    getData: function()
    {
        return itemModel.data;
    }
}

export {itemController};