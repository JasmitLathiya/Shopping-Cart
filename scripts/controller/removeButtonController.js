import {removeButtonModel} from '../model/removeButtonModel.js'
import { itemCounterView } from '../view/itemCounterView.js';
import {removeButtonView} from '../view/removeButtonView.js';

let removeButtonController = {
    init : function(id)
    {
        removeButtonModel.init(id);
        return removeButtonView.init();
    },
    getId : function()
    {
        return removeButtonModel.id;
    },
    handleRemove : function(id)
    {
        removeButtonController.removeTotalItemCountFromTotalCartItem(id);
        removeButtonController.removeTotalItemCostFromTotalCartCost(id);
        removeButtonView.hideItem(id);
    },
    removeTotalItemCountFromTotalCartItem : function(id)
    {
        let totalCartItem = parseInt(document.getElementById("totalCartItem").textContent);
        const itemCount = parseInt(document.getElementById("itemCounter"+id).value);

        totalCartItem -= itemCount;
        removeButtonView.setTotalItem(totalCartItem);
    },
    removeTotalItemCostFromTotalCartCost : function(id)
    {
        let totalCartCost = parseInt(document.getElementById("totalCartCost").textContent);
        const totalItemPrice = parseInt(document.getElementById("totalItemPrice"+id).textContent);
        totalCartCost -= totalItemPrice;
        removeButtonView.setTotalCartCost(totalCartCost);
    }
}

export {removeButtonController}
