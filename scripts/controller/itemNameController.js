import {itemNameModel} from '../model/itemNameModel.js'
import {itemNameView} from '../view/itemNameView.js'

let itemNameController = {
    init : function(name)
    {
        itemNameModel.init(name);
        return itemNameView.init();
    },
    getItemName : function()
    {
        return itemNameModel.name;
    }
}

export {itemNameController};