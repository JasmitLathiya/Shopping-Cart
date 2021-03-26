import {itemCounterController} from '../controller/itemCounterController.js'
import {increaseButtonController} from '../controller/increaseButtonController.js'
import {decreaseButtonController} from '../controller/decreaseButtonController.js'


const itemCounterView = {
    init : function()
    {
        this.id = itemCounterController.getItemId();
        this.pricePerItem = itemCounterController.getItemPrice();
        return this.render();
    },
    render : function()
    {
        this.itemCounterContainer = document.createElement("div");
        this.itemCounterContainer.className = "itemCounterContainer";
        this.itemCounterContainer.appendChild(decreaseButtonController.init(this.id,this.pricePerItem));
        this.itemCounterContainer.appendChild(this.createCounter(this.id));
        this.itemCounterContainer.appendChild(increaseButtonController.init(this.id,this.pricePerItem));
        return this.itemCounterContainer;
    },
    createCounter : function(id)
    {
        const itemCounter = document.createElement("input");
        itemCounter.className = "itemCounter";
        itemCounter.id = "itemCounter" + id;
        itemCounter.setAttribute("type","number");
        itemCounter.setAttribute("value",1);
        itemCounter.disabled = true;

        itemCounterController.addItemInTotalCartItem();

        return itemCounter;
    },
    setTotalCartItem : function(cartItem){
        const totalCartItem = document.getElementById("totalCartItem");
        totalCartItem.textContent = cartItem;
    }
}

export {itemCounterView}