import {totalPriceAndRemoveButtonModel} from "../model/totalPriceAndRemoveButtonModel.js"
import {totalPriceAndRemoveButtonView} from "../view/totalPriceAndRemoveButtonView.js"

let totalPriceAndRemoveButtonController = {
    init : function(id,pricePerItem){
        totalPriceAndRemoveButtonModel.init(id,pricePerItem);
        return totalPriceAndRemoveButtonView.init();
    },
    getId : function()
    {
        return totalPriceAndRemoveButtonModel.id;
    },
    getItemPrice : function()
    {
        return totalPriceAndRemoveButtonModel.pricePerItem;
    },
    addPriceInTotalCartCost : function(pricePerItem)
    {
        let totalCartCost = parseInt(document.getElementById("totalCartCost").textContent);
        totalCartCost += pricePerItem;
        totalPriceAndRemoveButtonView.setTotalCartCost(totalCartCost);
    }
}

export {totalPriceAndRemoveButtonController}