import {decreaseButtonController} from '../controller/decreaseButtonController.js'

let decreaseButtonView = {
    init : function()
    {
        this.id = decreaseButtonController.getItemId();
        this.pricePerItem = decreaseButtonController.getItemPrice();
        return this.render();
    },
    render : function()
    {
        this.decreaseButton = document.createElement("button");
        this.decreaseButton.className = "counterButton";
        this.decreaseButton.textContent = "-";
        this.decreaseButton.addEventListener("click", decreaseButtonController.handleDecrease.bind(event,this.id,this.pricePerItem));
        return this.decreaseButton;
    },
    setCount : function(id,count)
    {
        const countField = document.getElementById("itemCounter"+id);
        countField.value = count;
    },
    setTotalprice : function(id,price){
        const totalPrice = document.getElementById("totalItemPrice"+id);
        totalPrice.textContent = price;
    },
    setTotalItem : function(totalItem)
    {
        const totalCartItem = document.getElementById("totalCartItem");
        totalCartItem.textContent = totalItem;
    },
    setTotalCartCost : function(totalCost)
    {
        const totalCartCost = document.getElementById("totalCartCost");
        totalCartCost.textContent = totalCost;
    }
}

export {decreaseButtonView}