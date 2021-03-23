import {addToCartConroller} from '../controller/addToCartController.js'
import {itemController} from '../controller/itemController.js'
import {itemImageController} from '../controller/itemImageController.js'
import {itemNameController} from '../controller/itemNameController.js'
import {itemPriceController} from '../controller/itemPriceController.js'

// import {createItemImage,createItemName,createItemPrice,createAddToCartButton} from '../createItemHtmlElement.js'

let itemView = {
    init : function(){
        this.data=itemController.getData();
        return this.render();
    },
    render : function(){
        this.itemContainer = document.createElement("div");
        this.itemContainer.className="itemContainer";
        this.itemContainer.appendChild(itemImageController.init(this.data.image));
        this.itemContainer.appendChild(itemNameController.init(this.data.name));
        this.itemContainer.appendChild(itemPriceController.init(this.data.pricePerItem))
        this.itemContainer.appendChild(addToCartConroller.init(this.data));
        return this.itemContainer;
    }
}

export {itemView};