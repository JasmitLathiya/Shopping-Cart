import {totalPriceAndRemoveButtonController} from "../controller/totalPriceAndRemoveButtonController.js"
import {removeButtonController} from '../controller/removeButtonController.js'

const totalPriceAndRemoveButtonView = {
    init : function()
    {
        this.id = totalPriceAndRemoveButtonController.getId();
        this.pricePerItem = totalPriceAndRemoveButtonController.getItemPrice();
        return this.render();
    },
    render : function()
    {
        this.itemPriceAndRemoveButtonContainer = document.createElement("div");
        this.itemPriceAndRemoveButtonContainer.className = "itemPriceAndRemoveButtonContainer";
        this.itemPriceAndRemoveButtonContainer.appendChild(this.craeteTotalAndPerItemPriceContainer(this.id,this.pricePerItem));
        this.itemPriceAndRemoveButtonContainer.appendChild(removeButtonController.init(this.id));

        return this.itemPriceAndRemoveButtonContainer;
    },
    craeteTotalAndPerItemPriceContainer : function(id,pricePerItem)
    {
        let totalAndPerItemPriceContainer = document.createElement("div");
        totalAndPerItemPriceContainer.className = "totalAndPerItemPriceContainer";

        totalAndPerItemPriceContainer.appendChild(this.createTotalPrice(id,pricePerItem))
        totalAndPerItemPriceContainer.appendChild(this.createPricePerItem(pricePerItem));

        totalPriceAndRemoveButtonController.addPriceInTotalCartCost(pricePerItem);

        return totalAndPerItemPriceContainer;
    },
    createTotalPrice : function(id,pricePerItem)
    {
        let totalPrice = document.createElement("text");
        totalPrice.className = "totalPrice";
        totalPrice.textContent = "Total Price : ₹ ";
        
        let totalItemPrice = document.createElement("text");
        totalItemPrice.id = "totalItemPrice" + id;
        totalItemPrice.textContent = pricePerItem;
    
        totalPrice.appendChild(totalItemPrice);
        return totalPrice
    },
    createPricePerItem : function(pricePerItem)
    {
        let itemPrice = document.createElement("text");
        itemPrice.className = "itemPrice";
        itemPrice.textContent = "Price per item : ₹ " + pricePerItem;
        return itemPrice;
    },
    setTotalCartCost : function(cartCost)
    {
        const totalCartCost = document.getElementById("totalCartCost");
        totalCartCost.textContent = cartCost;
    }
    
}

export {totalPriceAndRemoveButtonView}