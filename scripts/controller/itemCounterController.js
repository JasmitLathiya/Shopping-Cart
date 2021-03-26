import {itemCounterModel} from '../model/itemCounterModel.js'
import {itemCounterView} from '../view/itemCounterView.js'

const itemCounterController = {
    init : function(id,pricePerItem)
    {
        itemCounterModel.init(id,pricePerItem);
        return itemCounterView.init();
    },
    getItemId : function()
    {
        return itemCounterModel.id;
    },
    getItemPrice : function()
    {
        return itemCounterModel.pricePerItem;
    },
    addItemInTotalCartItem : function()
    {
        let totalCartItem = parseInt(document.getElementById("totalCartItem").textContent);
        itemCounterView.setTotalCartItem(++totalCartItem);
    }
}

export {itemCounterController}