import {itemPriceController} from '../controller/itemPriceController.js'

let itemPriceView = {
    init : function(){
        return this.render();
    },
    render : function()
    {
        this.itemPrice = document.createElement("p");
        this.itemPrice.innerHTML = "₹ " + itemPriceController.getItemPrice();
        this.itemPrice.className = "itemPrice";
        return this.itemPrice;
    }
}

export {itemPriceView};