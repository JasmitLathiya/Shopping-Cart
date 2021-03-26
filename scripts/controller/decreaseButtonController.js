import {decreaseButtonModel} from '../model/decreaseButtonModel.js'
import {decreaseButtonView} from '../view/decreaseButtonView.js'
import {removeButtonController} from '../controller/removeButtonController.js'
import {cartTotalController} from '../controller/cartTotalController.js'

const decreaseButtonController = {
    init : function(id,pricePerItem)
    {
        decreaseButtonModel.init(id,pricePerItem);
        return decreaseButtonView.init();
    },
    getItemId : function(){
        return decreaseButtonModel.id;
    },
    getItemPrice : function(){
        return decreaseButtonModel.pricePerItem;
    },
    handleDecrease : function(id,pricePerItem)
    {
        const count = parseInt(document.getElementById("itemCounter"+id).value);
        if(count === 1)
        {
            removeButtonController.handleRemove(id);
            return;
        }
        decreaseButtonController.decreaseItemCounter(id);
        decreaseButtonController.decreaseTotalItemPrice(id,pricePerItem);
        decreaseButtonController.decreaseTotalCartItem();
        decreaseButtonController.decreaseTotalCartCost(pricePerItem);
    },
    decreaseItemCounter : function(id)
    {
        let currentCount  = parseInt(document.getElementById("itemCounter"+id).value);
        decreaseButtonView.setCount(id,--currentCount);
    },
    decreaseTotalItemPrice : function(id,pricePerItem)
    {
        let totalPrice = parseInt(document.getElementById("totalItemPrice"+id).textContent);
        totalPrice -= pricePerItem;
        decreaseButtonView.setTotalprice(id,totalPrice);
    },
    decreaseTotalCartItem : function()
    {
        let totalItem = parseInt(document.getElementById("totalCartItem").textContent);
        decreaseButtonView.setTotalItem(--totalItem);
    },
    decreaseTotalCartCost : function(pricePerItem)
    {
        let totalCartCost = parseInt(document.getElementById("totalCartCost").textContent);
        totalCartCost -= pricePerItem;
        decreaseButtonView.setTotalCartCost(totalCartCost);
    }
}

export {decreaseButtonController}
