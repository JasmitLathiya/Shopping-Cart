import {increaseButtonModel} from '../model/increaseButtonModel.js'
import {increaseButtonView} from '../view/increaseButtonView.js'
import {totalPriceAndRemoveButtonController} from '../controller/totalPriceAndRemoveButtonController.js'
import {cartTotalController} from '../controller/cartTotalController.js'

let increaseButtonController = {
    init : function(id,pricePerItem)
    {
        increaseButtonModel.init(id,pricePerItem);
        return increaseButtonView.init();
    },
    getItemId : function(){
        return increaseButtonModel.id;
    },
    getItemPrice : function(){
        return increaseButtonModel.pricePerItem;
    },
    handleIncrease : function(id,pricePerItem)
    {
        increaseButtonController.increaseItemCounter(id);
        increaseButtonController.increaseTotalItemPrice(id,pricePerItem);
        increaseButtonController.increaseTotalCartItem();
        increaseButtonController.increaseTotalCartCost(pricePerItem);
    },
    increaseItemCounter : function(id)
    {
        let currentCount  = parseInt(document.getElementById("itemCounter"+id).value);
        increaseButtonView.setCount(id,++currentCount);
    },
    increaseTotalItemPrice : function(id,pricePerItem)
    {
        let totalPrice = parseInt(document.getElementById("totalItemPrice"+id).textContent);
        totalPrice += pricePerItem;
        increaseButtonView.setTotalprice(id,totalPrice);
    },
    increaseTotalCartItem : function()
    {
        let totalItem = parseInt(document.getElementById("totalCartItem").textContent);
        increaseButtonView.setTotalItem(++totalItem);
    },
    increaseTotalCartCost : function(pricePerItem)
    {
        let totalCartCost = parseInt(document.getElementById("totalCartCost").textContent);
        totalCartCost += pricePerItem;
        increaseButtonView.setTotalCartCost(totalCartCost);
    }
}

export {increaseButtonController}
