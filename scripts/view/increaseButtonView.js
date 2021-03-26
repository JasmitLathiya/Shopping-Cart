import {increaseButtonController} from '../controller/increaseButtonController.js'

const increaseButtonView = {
    init : function()
    {
        this.id = increaseButtonController.getItemId();
        this.pricePerItem = increaseButtonController.getItemPrice();
        return this.render();
    },
    render : function()
    {
        this.increaseButton = document.createElement("button");
        this.increaseButton.className = "counterButton";
        this.increaseButton.textContent = "+";
        this.increaseButton.addEventListener("click", increaseButtonController.handleIncrease.bind(event,this.id,this.pricePerItem));
        return this.increaseButton;
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

export {increaseButtonView}