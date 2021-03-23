import {cartItemController} from "../controller/cartItemController.js"
import {itemImageController} from "../controller/itemImageController.js";
import {itemDiscriptionController} from "../controller/itemDiscriptionController.js"
import {itemCounterController} from "../controller/itemCounterController.js"
import {totalPriceAndRemoveButtonController} from "../controller/totalPriceAndRemoveButtonController.js";

let cartItemView = {
    init : function()
    {
        this.data=cartItemController.getData();
        return this.render();
    },
    render : function()
    {
        this.itemContainer = document.createElement("div");
        this.itemContainer.className = "itemContainer";
        this.itemContainer.id = "itemContainer" + this.data.id;

        this.itemContainer.appendChild(itemImageController.init(this.data.image));
        this.itemContainer.appendChild(itemDiscriptionController.init(this.data.name,this.data.color,this.data.size));
        this.itemContainer.appendChild(itemCounterController.init(this.data.id,this.data.pricePerItem));
        this.itemContainer.appendChild(totalPriceAndRemoveButtonController.init(this.data.id,this.data.pricePerItem));
        return this.itemContainer;
    }
}

export {cartItemView}